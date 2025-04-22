import os
from dotenv import load_dotenv
import google.generativeai as genai
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variable
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    logger.error("GEMINI_API_KEY not found in environment variables")
    raise ValueError("GEMINI_API_KEY not found in environment variables. Please set it in .env file")

logger.info("Successfully loaded Gemini API key")

try:
    # Configure Gemini API
    genai.configure(api_key=GEMINI_API_KEY)
    logger.info("Successfully configured Gemini API")
except Exception as e:
    logger.error(f"Error configuring Gemini API: {str(e)}")
    raise

# Set the model
model = genai.GenerativeModel(model_name="models/gemini-1.5-pro-latest")
logger.info("Successfully initialized Gemini model")

def summarize_email(content):
    try:
        if not content:
            return "No content provided for summarization"
            
        logger.info("Generating summary...")
        prompt = f"Summarize the following email in 3-5 bullet points:\n\n{content}"
        response = model.generate_content(prompt)
        summary = response.text.strip()
        logger.info("Successfully generated summary")
        return summary
    except Exception as e:
        error_msg = f"Error during summarization: {str(e)}"
        logger.error(error_msg)
        return error_msg
