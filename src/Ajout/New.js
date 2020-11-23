import React, { Component } from "react";
import "./New.css";

export default class Add extends Component {
  render() {
    return (
      <div className="appli">
        <div>
          <button
            className="Ajout"
            title="Ajouter un film"
            onClick={this.props.movieAdd}
          >
            Ajouter un film
          </button>
        </div>
        <div className="first">
          <h2>Nouveau Film</h2>
          <div className="second">
            <form>
              <p>
                Saisir le lien de la Couverture :
                <input
                  type="text"
                  id="text"
                  placeholder="Couverture"
                  onChange={this.props.Change}
                />
              </p>
              <p>
                Saisir le titre :
                <input
                  type="text"
                  id="name"
                  placeholder="titre"
                  onChange={this.props.Change1}
                />
              </p>
              <p>
                Saisir le genre du film :
                <input
                  type="text"
                  id="name"
                  placeholder="genre"
                  onChange={this.props.Change2}
                />
              </p>
              <p>
                Saisir l'avis du public :
                <input
                  type="text"
                  id="nombre"
                  placeholder="Avis"
                  onChange={this.props.Change3}
                />
              </p>
              <p>
                Saisir le lien du film :
                <input
                  type="text"
                  id="text"
                  placeholder="URL"
                  onChange={this.props.Change4}
                />
              </p>
              <input type="reset" value="Soumettre" />
              <input type="submit" value="Raffrechir" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
