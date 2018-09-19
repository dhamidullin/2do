import { Component, OnInit } from '@angular/core';
import { Note } from '../../classes/note';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = null;

  constructor(
    private http: HttpService,
    private router: Router,
    private events: EventsService
  ) { }

  ngOnInit() {
    this.getNotes();
    this.events.refreshNotes.subscribe(() => {
      this.getNotes();
    });
  }

  getNotes() {
    this.http.getNotes().subscribe(data => {
      this.notes = data.json().notes;
    });
  }

  addNote() {
    this.http.addNewNote().subscribe(data => {
      console.log(data.json());
      this.router.navigate(['notes/' + data.json()._id]);
    });
  }

  deleteNote(id) {
    // console.log(id);
    this.http.deleteNote(id).subscribe(() => {
      this.getNotes();
    });
  }
}
