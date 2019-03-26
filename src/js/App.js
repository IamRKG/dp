export default class App{
    constructor(appId){
        const app_id = document.querySelector(`#${appId}`);
        this.context = app_id.getContext('2d');
    }

    /*rectangle(width, height){
        this.context.rect(10, 20, width, height);
        this.context.fill();        
    }*/
}