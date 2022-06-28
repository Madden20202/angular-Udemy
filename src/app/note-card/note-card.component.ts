import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';
import { Note } from './note-card.model';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  /*
    In order for any information to be used, 
    it has to be passed down all layers. Let's 
    explore it with a note taking app

    Amended, a model file is better since it 
    cleans up the code and makes it more automated

    What if we wanna pass it as an input?
    All that has to be done is add a variable that 
    follows @Input(), which tells it to expect 
    input from somewhere and use it later

    Now let's add the custom event, and keep life 
    interesting for the user
  */

  @Input() noteCard!: Note

  @Output() noteCLicked = new EventEmitter<Note>()

  constructor() { }

  ngOnInit(): void {
  }

  /*
    This now will return a json-esq response of the noteCard,
    which could be sent to an api or to another portion 
    of the app. Notice though that the parent calls the 
    function from the child, and moves ahead with the result 
    of the custom event
  */
  onNoteClicked() {
    console.log("The task would show as done")

    this.noteCLicked.emit(this.noteCard)
  }

}
