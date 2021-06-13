from flask import Flask, render_template, send_from_directory
#from flask_session import Session
#from tempfile import mkdtemp

app = Flask(__name__)

#app.config["SESSION_FILE_DIR"] = mkdtemp()
#app.config["SESSION_PERMANENT"] = False
#app.config["SESSION_TYPE"] = "filesystem"
#Session(app)

@app.route("/")
def index():
    # return render_template("index.html")
    return send_from_directory('../build', 'index.html')

if __name__ == '__main__':
    app.run('0.0.0.0', 54321)
