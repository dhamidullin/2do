import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TimeBoxingComponent } from './components/time-boxing/time-boxing.component';
import { ClockComponent } from './components/clock/clock.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { TimeFromMillisecondsPipe } from './pipes/time-from-milliseconds.pipe';
import { TodayComponent } from './components/today/today.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NotesComponent } from './components/notes/notes.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PingComponent } from './components/ping/ping.component';
import { TaskEditorComponent } from './components/tasks/task-editor/task-editor.component';
import { DailyTasksComponent } from './components/daily-tasks/daily-tasks.component';
import { DailyTaskEditorComponent } from './components/daily-tasks/daily-task-editor/daily-task-editor.component';
import { BoardComponent } from './components/board/board.component';
import { NoteComponent } from './components/notes/note/note.component';
import { NoteEditorComponent } from './components/notes/note-editor/note-editor.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    TimeBoxingComponent,
    ClockComponent,
    PomodoroComponent,
    TimeFromMillisecondsPipe,
    TodayComponent,
    TasksComponent,
    NotesComponent,
    SignInComponent,
    SignUpComponent,
    PingComponent,
    TaskEditorComponent,
    DailyTasksComponent,
    DailyTaskEditorComponent,
    BoardComponent,
    NoteComponent,
    NoteEditorComponent,
    LeftSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
