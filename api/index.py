# app/__init__
from .chat import routes
from dotenv import load_dotenv

load_dotenv()

app = routes.app
