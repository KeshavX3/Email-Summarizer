from flask import Flask, jsonify, request
from gmail_reader import get_emails  # Your function
from summarizer import summarize_email  # Your function
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow frontend access

@app.route('/emails', methods=['GET'])
def fetch_and_summarize():
    emails = get_emails()  # Get emails list
    result = []

    for email in emails:
        summary = summarize_email(email['body'])  # Summarize each
        result.append({
            'subject': email['subject'],
            'sender': email['from'],
            'summary': summary
        })

    return jsonify(result)

@app.route('/summarize', methods=['POST'])
def summarize_text():
    try:
        data = request.get_json()
        email_text = data.get('email', '')
        tone = data.get('tone', 'Professional')
        
        if not email_text:
            return jsonify({'error': 'No email text provided'}), 400
            
        # Generate summary with the specified tone
        prompt = f"Summarize the following email in 3-5 bullet points in a {tone} tone:\n\n{email_text}"
        summary = summarize_email(email_text)
        
        return jsonify({'summary': summary})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Verify API key is set
    if not os.getenv("GEMINI_API_KEY"):
        raise ValueError("GEMINI_API_KEY not found in environment variables")
    app.run(debug=True)
