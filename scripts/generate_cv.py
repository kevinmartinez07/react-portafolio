from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Documents" / "CV_Kevin_Martinez.pdf"
TEMP_OUTPUT = OUTPUT.with_suffix(".tmp.pdf")

FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
pdfmetrics.registerFont(TTFont("DejaVu", FONT_DIR / "DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DejaVu-Bold", FONT_DIR / "DejaVuSans-Bold.ttf"))

PAGE_WIDTH, PAGE_HEIGHT = A4
NAVY = colors.HexColor("#0F1F38")
BLUE = colors.HexColor("#2563EB")
PALE_BLUE = colors.HexColor("#EAF1FF")
TEXT = colors.HexColor("#152033")
MUTED = colors.HexColor("#53637A")
LINE = colors.HexColor("#D9E1EC")
WHITE = colors.white


def style(name, *, size=8.2, leading=11.2, color=TEXT, font="DejaVu", space=0):
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=TA_LEFT,
        spaceAfter=space,
        allowWidows=0,
        allowOrphans=0,
    )


BODY = style("body")
SMALL = style("small", size=7.2, leading=9.5, color=MUTED)
SECTION = style("section", size=8.4, leading=10, color=BLUE, font="DejaVu-Bold")
ROLE = style("role", size=9.1, leading=11, color=TEXT, font="DejaVu-Bold")
META = style("meta", size=7.1, leading=9, color=MUTED)
BULLET = style("bullet", size=7.45, leading=9.8, color=TEXT)
TAG = style("tag", size=7.1, leading=9.2, color=NAVY, font="DejaVu-Bold")


def draw_paragraph(pdf, text, x, y, width, paragraph_style, gap=0):
    paragraph = Paragraph(text, paragraph_style)
    _, height = paragraph.wrap(width, PAGE_HEIGHT)
    paragraph.drawOn(pdf, x, y - height)
    return y - height - gap


def draw_section_title(pdf, title, x, y, width):
    y = draw_paragraph(pdf, title.upper(), x, y, width, SECTION, gap=4)
    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.6)
    pdf.line(x, y, x + width, y)
    return y - 7


def draw_experience(pdf, experience, x, y, width):
    y = draw_paragraph(pdf, experience["role"], x, y, width, ROLE, gap=1)
    y = draw_paragraph(
        pdf,
        f'{experience["company"]} | {experience["dates"]}',
        x,
        y,
        width,
        META,
        gap=3,
    )
    for bullet in experience["bullets"]:
        y = draw_paragraph(pdf, f'- {bullet}', x, y, width, BULLET, gap=1.5)
    return y - 7


def generate():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(TEMP_OUTPUT), pagesize=A4)
    pdf.setTitle("CV Kevin Santiago Martinez Molina")
    pdf.setAuthor("Kevin Santiago Martinez Molina")
    pdf.setSubject("Desarrollador Full Stack")

    pdf.setFillColor(NAVY)
    pdf.rect(0, PAGE_HEIGHT - 124, PAGE_WIDTH, 124, fill=1, stroke=0)
    pdf.setFillColor(BLUE)
    pdf.rect(0, PAGE_HEIGHT - 124, 12, 124, fill=1, stroke=0)

    pdf.setFillColor(WHITE)
    pdf.setFont("DejaVu-Bold", 21)
    pdf.drawString(34, PAGE_HEIGHT - 47, "KEVIN SANTIAGO MARTINEZ MOLINA")
    pdf.setFont("DejaVu", 11.5)
    pdf.drawString(34, PAGE_HEIGHT - 70, "DESARROLLADOR FULL STACK")
    pdf.setFont("DejaVu", 7.6)
    pdf.setFillColor(colors.HexColor("#D9E7FF"))
    pdf.drawString(34, PAGE_HEIGHT - 94, "Medellín, Colombia  |  +57 301 414 8471")
    pdf.drawString(34, PAGE_HEIGHT - 109, "kevinmartinez0114@gmail.com  |  github.com/kevinmartinez07")

    margin = 34
    gutter = 22
    left_width = 166
    right_x = margin + left_width + gutter
    right_width = PAGE_WIDTH - right_x - margin
    top = PAGE_HEIGHT - 148

    pdf.setFillColor(PALE_BLUE)
    pdf.roundRect(margin - 10, 36, left_width + 20, top - 22, 12, fill=1, stroke=0)

    left_y = top
    left_y = draw_section_title(pdf, "Contacto", margin, left_y, left_width)
    left_y = draw_paragraph(
        pdf,
        '<link href="mailto:kevinmartinez0114@gmail.com" color="#152033">kevinmartinez0114@gmail.com</link>',
        margin,
        left_y,
        left_width,
        SMALL,
        gap=2,
    )
    left_y = draw_paragraph(
        pdf,
        '<link href="https://linkedin.com/in/kevin-santiago-martinez-molina-b21a0b166" color="#152033">LinkedIn: Kevin Santiago Martinez</link>',
        margin,
        left_y,
        left_width,
        SMALL,
        gap=2,
    )
    left_y = draw_paragraph(pdf, "Inglés B1 | Español nativo", margin, left_y, left_width, SMALL, gap=12)

    left_y = draw_section_title(pdf, "Stack principal", margin, left_y, left_width)
    for item in [
        "React | Next.js | Angular",
        "C# / .NET | Java / Spring Boot",
        "Node.js | TypeScript | REST",
        "PostgreSQL | SQL Server | MongoDB",
        "AWS | Azure | Docker | CI/CD",
        "Clean / Hexagonal | DDD | SOLID",
    ]:
        left_y = draw_paragraph(pdf, item, margin, left_y, left_width, TAG, gap=4)
    left_y -= 8

    left_y = draw_section_title(pdf, "Educación", margin, left_y, left_width)
    left_y = draw_paragraph(pdf, "Ingeniería de Sistemas", margin, left_y, left_width, ROLE, gap=1)
    left_y = draw_paragraph(pdf, "Institución Universitaria ITM", margin, left_y, left_width, SMALL, gap=1)
    left_y = draw_paragraph(pdf, "En curso - 9.º semestre", margin, left_y, left_width, SMALL, gap=8)
    left_y = draw_paragraph(pdf, "Tecnología en Desarrollo de Software", margin, left_y, left_width, ROLE, gap=1)
    left_y = draw_paragraph(pdf, "Institución Universitaria ITM | 2021 - 2025", margin, left_y, left_width, SMALL, gap=11)

    left_y = draw_section_title(pdf, "Certificación", margin, left_y, left_width)
    left_y = draw_paragraph(pdf, "Claude Certified Architect - Foundations", margin, left_y, left_width, ROLE, gap=1)
    left_y = draw_paragraph(pdf, "Anthropic | 2026 - 2027", margin, left_y, left_width, SMALL, gap=11)

    left_y = draw_section_title(pdf, "Herramientas", margin, left_y, left_width)
    draw_paragraph(
        pdf,
        "Git | GitHub Actions | Azure DevOps | Postman | JasperReports | Scrum | Kanban",
        margin,
        left_y,
        left_width,
        SMALL,
    )

    right_y = top
    right_y = draw_section_title(pdf, "Perfil profesional", right_x, right_y, right_width)
    summary = (
        "Desarrollador Full Stack con más de 3 años de experiencia construyendo soluciones "
        "empresariales, APIs REST, microservicios y microfrontends. Experiencia con React, "
        "Angular, Next.js, .NET, Java, Node.js, PostgreSQL y servicios en AWS y Azure. Enfoque "
        "en arquitectura limpia, seguridad, calidad de código y uso aplicado de IA en el ciclo de desarrollo."
    )
    right_y = draw_paragraph(pdf, summary, right_x, right_y, right_width, BODY, gap=11)
    right_y = draw_section_title(pdf, "Experiencia profesional", right_x, right_y, right_width)

    experiences = [
        {
            "role": "Desarrollador Full Stack",
            "company": "PrevalentWare S.A.S.",
            "dates": "Marzo 2026 - Septiembre 2026",
            "bullets": [
                "Desarrollo full stack con Next.js, TypeScript, Node.js/Bun y PostgreSQL.",
                "Soluciones AWS con Lambda, API Gateway, S3, RDS, ECS/Fargate, Cognito e IAM.",
                "Autenticación y autorización con Cognito y Casbin; IA aplicada a análisis, código y documentación.",
            ],
        },
        {
            "role": "Desarrollador de Software",
            "company": "Ofima S.A.S.",
            "dates": "Agosto 2025 - Marzo 2026",
            "bullets": [
                "Microservicios en .NET y microfrontends Angular para la plataforma DomoNow.",
                "Arquitectura limpia y hexagonal, DDD, SOLID, DTOs y manejo consistente de errores.",
                "PostgreSQL, MongoDB, RabbitMQ y CI/CD con Azure DevOps.",
            ],
        },
        {
            "role": "Desarrollador de Software",
            "company": "HYG Consultores S.A.S.",
            "dates": "Agosto 2023 - Julio 2025",
            "bullets": [
                "Desarrollo y mantenimiento de soluciones empresariales con Java, .NET, React y Node.js.",
                "Aplicaciones legacy y modernas, APIs REST, JBoss, Azure y plataformas GIS.",
                "PostgreSQL, SQL Server, Oracle, JasperReports, soporte productivo e integración con clientes.",
            ],
        },
    ]

    for experience in experiences:
        right_y = draw_experience(pdf, experience, right_x, right_y, right_width)

    right_y = draw_section_title(pdf, "Fortalezas", right_x, right_y, right_width)
    right_y = draw_paragraph(
        pdf,
        "Comunicación con stakeholders | Trabajo multidisciplinario | Pensamiento analítico | "
        "Resolución de problemas | Adaptabilidad | Aprendizaje continuo",
        right_x,
        right_y,
        right_width,
        SMALL,
        gap=11,
    )

    right_y = draw_section_title(pdf, "Proyectos destacados", right_x, right_y, right_width)
    projects = [
        (
            "HI Ibiza - Menú digital QR",
            "Producto para cliente con React, TypeScript, búsqueda, catálogo responsive, SEO técnico y optimización de imágenes.",
        ),
        (
            "SmartLogistics",
            "Plataforma distribuida con Java 21, Spring Boot, Next.js, RabbitMQ, Redis, Docker y observabilidad.",
        ),
        (
            "Finanz App",
            "Gestión de ingresos y egresos con Next.js, TypeScript, Prisma, PostgreSQL y autenticación.",
        ),
    ]
    for title, description in projects:
        right_y = draw_paragraph(pdf, title, right_x, right_y, right_width, ROLE, gap=1)
        right_y = draw_paragraph(pdf, description, right_x, right_y, right_width, SMALL, gap=6)

    right_y = draw_section_title(pdf, "Enfoque técnico", right_x, right_y, right_width)
    right_y = draw_paragraph(
        pdf,
        "Sistemas escalables | Seguridad de APIs | Arquitectura orientada a dominio | "
        "Automatización CI/CD | IA aplicada al desarrollo de software",
        right_x,
        right_y,
        right_width,
        SMALL,
        gap=11,
    )

    right_y = draw_section_title(pdf, "Soluciones empresariales", right_x, right_y, right_width)
    solutions = [
        "DomoNow: gestión de propiedades horizontales con microservicios y microfrontends.",
        "SAU y SEPOT: soluciones de información urbana, predial y geográfica para entidades públicas.",
        "SITCO Predial: gestión de infraestructura energética con operación regional en Latinoamérica.",
    ]
    for solution in solutions:
        right_y = draw_paragraph(pdf, f'- {solution}', right_x, right_y, right_width, SMALL, gap=3)

    pdf.setStrokeColor(LINE)
    pdf.line(margin, 27, PAGE_WIDTH - margin, 27)
    pdf.setFont("DejaVu", 6.8)
    pdf.setFillColor(MUTED)
    pdf.drawString(margin, 15, "Portafolio: https://react-portafolio-beige.vercel.app/")
    pdf.drawRightString(PAGE_WIDTH - margin, 15, "Actualizado: septiembre de 2026")

    pdf.showPage()
    pdf.save()
    TEMP_OUTPUT.replace(OUTPUT)


if __name__ == "__main__":
    generate()
