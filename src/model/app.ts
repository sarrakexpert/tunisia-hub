import { Case } from "./case";
import { GlobalActions } from "./globalActions";


export class App {

public globalActions:GlobalActions = new GlobalActions();
public case:Case=new Case();

}

export const app = new App();