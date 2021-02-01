
from flask import Flask, request, jsonify

server = Flask(__name__)

todo_list = []


def add_todos():
    todo = request.json['todo']
    todo_list.append(todo)
    return todo


@server.route('/api/todos', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        return jsonify(todo_list)
    else:
        return add_todos()
