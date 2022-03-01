import quadratic_equation

from flask import Flask, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        try:
            a = int(request.form['a'])
            b = int(request.form['b'])
            c = int(request.form['c'])
            result = quadratic_equation.Equation(a, b, c)
            answer = result.getHtml()
            return f'<div>Ответ <span>{answer}</span></div>'
        except ValueError:
            return '<div>Введены некорректные данные</div>'

    return '''
        <form action="/" method="post">
            <p><span>a= </span><input type=text name=a></p>
            <p><span>b= </span><input type=text name=b></p>
            <p><span>c= </span><input type=text name=c></p>
            <p><input type=submit value=Press>
        </form>
    '''


if __name__ == '__main__':
    app.debug = True
    app.run("127.0.0.1", port='8080')
