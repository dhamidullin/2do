import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { PomodoroComponent } from "./components/pomodoro/pomodoro.component";
import { TodayComponent } from "./components/today/today.component";
import { NotesComponent } from "./components/notes/notes.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { TaskEditorComponent } from "./components/tasks/task-editor/task-editor.component";
import { DailyTasksComponent } from "./components/daily-tasks/daily-tasks.component";
import { DailyTaskEditorComponent } from "./components/daily-tasks/daily-task-editor/daily-task-editor.component";
import { BoardComponent } from "./components/board/board.component";
import { NoteComponent } from "./components/notes/note/note.component";
import { NoteEditorComponent } from "./components/notes/note-editor/note-editor.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "tasks",
    component: TasksComponent,
    children: [
      {
        path: "new",
        component: TaskEditorComponent
      },
      {
        path: ":id",
        component: TaskEditorComponent
      }
    ]
  },
  {
    path: "daily-tasks",
    component: DailyTasksComponent,
    children: [
      {
        path: "new",
        component: DailyTaskEditorComponent
      },
      {
        path: ":id",
        component: DailyTaskEditorComponent
      }
    ]
  },
  {
    path: "pomodoro",
    component: PomodoroComponent
  },
  {
    path: "today",
    component: TodayComponent
  },
  {
    path: "notes",
    component: NotesComponent,
    children: [
      {
        path: ":id",
        component: NoteComponent
      }
    ]
  },
  {
    path: "board",
    component: BoardComponent
  },
  {
    path: "login",
    component: SignInComponent
  },
  {
    path: "register",
    component: SignUpComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
