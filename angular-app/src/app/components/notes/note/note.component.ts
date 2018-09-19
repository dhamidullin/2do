import { Component, OnInit } from '@angular/core';
import { Note } from '../../../classes/note';
import { HttpService } from '../../../services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  get _id() {
    return this.activatedRoute.snapshot.params.id
  }

  title: string = '';
  body: string = '';

  note: Note = null;
  changed: boolean = false;

  constructor(
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private events: EventsService
  ) { }

  ngOnInit() {
    this.http.getOneNoteById(this._id).subscribe(data => {
      this.note = data.json().note;
      this.title = this.note.title;
      this.body = this.note.body;
    });
  }

  setBody(event) {
    console.log(event);
  }

  saveAndClose() {
    console.log(this.note);
    if (this.changed/* && confirm('Сохранить изменения')*/) {
      this.http.saveNote(this.note).subscribe(() => {
        this.events.refreshNotes.emit();
      });
    }
    this.router.navigate(['/notes']);
  }
}
