import { Game } from "../../models/game"

export const gameArray: Game[] = [
  { id: 1, name: "Among Us", price: 6.49, releaseDate: "06/15/18", developer: "Innersloth", image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg"},
  { id: 2, name: "Red Dead Redemption 2", price: 79.99, releaseDate: "10/26/18", developer: "Rockstar Games", image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"},
  { id: 3, name: "Ace Combat 7: Skies Unknown", price: 79.99, releaseDate: "01/18/19", developer: "Bandai Namco Studios", publisher: "Bandai Namco Entertainment", image: "https://upload.wikimedia.org/wikipedia/en/2/22/Ace_Combat_7_Skies_Unknown_game_cover.jpg"},
  { id: 4, name: "Not A Real Game", price: 49.99, releaseDate: "01/01/11", developer: "NotReal Games", publisher: "Publisher Publisher"}
  /*
    gameListObj1 : String = "Among us";
    gameListObj2 : String = "Red Dead Redemption 2";
    gameListObj3 : String = "Ace Combat 7: Skies Unknown";
    gameListObj4 : String = "Not A Real Game";

    gameArray : String[] = [this.gameListObj1, this.gameListObj2, this.gameListObj3, this.gameListObj4];
    */
]
