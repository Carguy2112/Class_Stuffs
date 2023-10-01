import { Component } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ['./article.component.css']

})

export class ArticleComponent{
  title: string = 'Whatever you want'
  content: string = "Some content goes here. The instructions reference 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, assumenda. Quae, eveniet sint ullam enim explicabo sapiente alias voluptas doloremque delectus nam reprehenderit. Illum ipsum necessitatibus corporis ad nemo est.' but I think it would be better with 'Some content goes here'."

  isTechRelated: boolean = false

  getBgColor() {
    return this.isTechRelated === true ? 'blue' : 'yellow';
  }
}
