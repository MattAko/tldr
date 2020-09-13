from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/api', methods=['GET', 'POST'])
def api():
    if request.method == 'POST':
        print(request.data)
        return {
            'userID': 1,
            'title': 'Testing post..',
            'compeleted': True
        }
    else:
        return {
            'userID': 1,
            'title': 'Flask React App',
            'compeleted': False
        }
