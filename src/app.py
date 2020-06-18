from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/menu")
def menu():
    return render_template('menu.html')

@app.route("/locations")
def locations():
    return render_template('locations.html')

if __name__ == "__main__":
    app.run()