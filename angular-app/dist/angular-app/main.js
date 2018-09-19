(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pomodoro/pomodoro.component */ "./src/app/components/pomodoro/pomodoro.component.ts");
/* harmony import */ var _components_today_today_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/today/today.component */ "./src/app/components/today/today.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tasks/tasks.component */ "./src/app/components/tasks/tasks.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_tasks_task_editor_task_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tasks/task-editor/task-editor.component */ "./src/app/components/tasks/task-editor/task-editor.component.ts");
/* harmony import */ var _components_daily_tasks_daily_tasks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/daily-tasks/daily-tasks.component */ "./src/app/components/daily-tasks/daily-tasks.component.ts");
/* harmony import */ var _components_daily_tasks_daily_task_editor_daily_task_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/daily-tasks/daily-task-editor/daily-task-editor.component */ "./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_notes_note_note_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notes/note/note.component */ "./src/app/components/notes/note/note.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "tasks",
        component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"],
        children: [
            {
                path: "new",
                component: _components_tasks_task_editor_task_editor_component__WEBPACK_IMPORTED_MODULE_10__["TaskEditorComponent"]
            },
            {
                path: ":id",
                component: _components_tasks_task_editor_task_editor_component__WEBPACK_IMPORTED_MODULE_10__["TaskEditorComponent"]
            }
        ]
    },
    {
        path: "daily-tasks",
        component: _components_daily_tasks_daily_tasks_component__WEBPACK_IMPORTED_MODULE_11__["DailyTasksComponent"],
        children: [
            {
                path: "new",
                component: _components_daily_tasks_daily_task_editor_daily_task_editor_component__WEBPACK_IMPORTED_MODULE_12__["DailyTaskEditorComponent"]
            },
            {
                path: ":id",
                component: _components_daily_tasks_daily_task_editor_daily_task_editor_component__WEBPACK_IMPORTED_MODULE_12__["DailyTaskEditorComponent"]
            }
        ]
    },
    {
        path: "pomodoro",
        component: _components_pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_4__["PomodoroComponent"]
    },
    {
        path: "today",
        component: _components_today_today_component__WEBPACK_IMPORTED_MODULE_5__["TodayComponent"]
    },
    {
        path: "notes",
        component: _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_6__["NotesComponent"],
        children: [
            {
                path: ":id",
                component: _components_notes_note_note_component__WEBPACK_IMPORTED_MODULE_14__["NoteComponent"]
            }
        ]
    },
    {
        path: "board",
        component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_13__["BoardComponent"]
    },
    {
        path: "login",
        component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"]
    },
    {
        path: "register",
        component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
    },
    {
        path: "**",
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_time_boxing_time_boxing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/time-boxing/time-boxing.component */ "./src/app/components/time-boxing/time-boxing.component.ts");
/* harmony import */ var _components_clock_clock_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/clock/clock.component */ "./src/app/components/clock/clock.component.ts");
/* harmony import */ var _components_pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pomodoro/pomodoro.component */ "./src/app/components/pomodoro/pomodoro.component.ts");
/* harmony import */ var _pipes_time_from_milliseconds_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/time-from-milliseconds.pipe */ "./src/app/pipes/time-from-milliseconds.pipe.ts");
/* harmony import */ var _components_today_today_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/today/today.component */ "./src/app/components/today/today.component.ts");
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tasks/tasks.component */ "./src/app/components/tasks/tasks.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_ping_ping_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ping/ping.component */ "./src/app/components/ping/ping.component.ts");
/* harmony import */ var _components_tasks_task_editor_task_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tasks/task-editor/task-editor.component */ "./src/app/components/tasks/task-editor/task-editor.component.ts");
/* harmony import */ var _components_daily_tasks_daily_tasks_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/daily-tasks/daily-tasks.component */ "./src/app/components/daily-tasks/daily-tasks.component.ts");
/* harmony import */ var _components_daily_tasks_daily_task_editor_daily_task_editor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/daily-tasks/daily-task-editor/daily-task-editor.component */ "./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_notes_note_note_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/notes/note/note.component */ "./src/app/components/notes/note/note.component.ts");
/* harmony import */ var _components_notes_note_editor_note_editor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/notes/note-editor/note-editor.component */ "./src/app/components/notes/note-editor/note-editor.component.ts");
/* harmony import */ var _components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/left-sidebar/left-sidebar.component */ "./src/app/components/left-sidebar/left-sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_time_boxing_time_boxing_component__WEBPACK_IMPORTED_MODULE_11__["TimeBoxingComponent"],
                _components_clock_clock_component__WEBPACK_IMPORTED_MODULE_12__["ClockComponent"],
                _components_pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_13__["PomodoroComponent"],
                _pipes_time_from_milliseconds_pipe__WEBPACK_IMPORTED_MODULE_14__["TimeFromMillisecondsPipe"],
                _components_today_today_component__WEBPACK_IMPORTED_MODULE_15__["TodayComponent"],
                _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_16__["TasksComponent"],
                _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_17__["NotesComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_18__["SignInComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__["SignUpComponent"],
                _components_ping_ping_component__WEBPACK_IMPORTED_MODULE_20__["PingComponent"],
                _components_tasks_task_editor_task_editor_component__WEBPACK_IMPORTED_MODULE_21__["TaskEditorComponent"],
                _components_daily_tasks_daily_tasks_component__WEBPACK_IMPORTED_MODULE_22__["DailyTasksComponent"],
                _components_daily_tasks_daily_task_editor_daily_task_editor_component__WEBPACK_IMPORTED_MODULE_23__["DailyTaskEditorComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__["BoardComponent"],
                _components_notes_note_note_component__WEBPACK_IMPORTED_MODULE_25__["NoteComponent"],
                _components_notes_note_editor_note_editor_component__WEBPACK_IMPORTED_MODULE_26__["NoteEditorComponent"],
                _components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["LeftSidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/time.ts":
/*!*********************************!*\
  !*** ./src/app/classes/time.ts ***!
  \*********************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
var Time = /** @class */ (function () {
    function Time(milliseconds) {
        this.milliseconds = 0;
        this.milliseconds = milliseconds;
    }
    Object.defineProperty(Time.prototype, "h", {
        get: function () { return (Math.floor(this.milliseconds / 1000 / 60 / 60) % 24); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "m", {
        get: function () { return (Math.floor(this.milliseconds / 1000 / 60) % 60); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "timeString", {
        get: function () {
            return (this.h + ":" +
                ("" + (this.m < 10 ? '0' + this.m : this.m)));
        },
        enumerable: true,
        configurable: true
    });
    Time.getTimeString = function (milliseconds) {
        var h = Math.floor(milliseconds / 1000 / 60 / 60) % 24;
        var m = Math.floor(milliseconds / 1000 / 60) % 60;
        return (h + ":" +
            ("" + (m < 10 ? '0' + m : m)));
    };
    return Time;
}());



/***/ }),

/***/ "./src/app/components/board/board.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/board/board.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 1vw;\n  padding: 0 1%;\n}\n"

/***/ }),

/***/ "./src/app/components/board/board.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    board works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
    }
    BoardComponent.prototype.ngOnInit = function () { };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/components/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/components/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/components/clock/clock.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/clock/clock.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".face {\n  display: block;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  position: relative;\n}\n.face .arrow {\n  background: black;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  -webkit-transform-origin: center bottom;\n          transform-origin: center bottom;\n}\n.face .arrow.hours {\n  height: 28%;\n  width: 4%;\n}\n.face .arrow.minutes {\n  height: 40%;\n  width: 2%;\n}\n.face .arrow.seconds {\n  height: 48%;\n  width: 0%;\n  background: crimson;\n  border: 1px solid rgba(255, 0, 0, 0.342);\n}\n.face .arrow.dot {\n  width: 6%;\n  height: 6%;\n  border-radius: 50%;\n  background: red;\n}\n.face .arrow.hoursHatch {\n  height: 50%;\n  width: 1%;\n  background: transparent;\n}\n.face .arrow.hoursHatch .hatch {\n  width: 100%;\n  height: 4%;\n  background: black;\n}\n.face .arrow.hoursHatch .number {\n  width: 100%;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/clock/clock.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/clock/clock.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"debug\">\n  <p>{{datenow}}</p>\n  <p>{{now}}</p>\n  <p>{{hDeg}}</p>\n  <p>{{mDeg}}</p>\n  <p>{{sDeg}}</p>\n</div>\n<div class=\"face\" [ngStyle]=\"{\n    'height': size + 'px',\n    'width': size + 'px'\n  }\">\n  <div class=\"arrow seconds\" [ngStyle]=\"{\n      'transform': 'translateX(-50%) translateY(-100%) rotate(' + sDeg + 'deg)'\n    }\"></div>\n  <div class=\"arrow minutes\" [ngStyle]=\"{\n      'transform': 'translateX(-50%) translateY(-100%) rotate(' + mDeg + 'deg)'\n    }\"></div>\n  <div class=\"arrow hours\" [ngStyle]=\"{\n      'transform': 'translateX(-50%) translateY(-100%) rotate(' + hDeg + 'deg)'\n    }\"></div>\n  <div class=\"arrow dot\"></div>\n  <div class=\"arrow hoursHatch\" *ngFor=\"let a of arr60, let i = index\" [ngStyle]=\"{\n      'transform': 'translateX(-50%) translateY(-100%) rotate(' + i * 6 + 'deg)',\n      'width': i % 5 == 0 ? '3px': ''\n    }\">\n    <div class=\"hatch\" [ngStyle]=\"{\n      'height': i % 5 == 0 ? '6%': ''\n    }\"></div>\n    <div class=\"number\" *ngIf=\"i % 5 == 0\" [ngStyle]=\"{\n        'transform': 'translateX(0%) rotate(-' + i * 6 + 'deg)'\n      }\">{{(i / 5 == 0 ? '12': i / 5)}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/clock/clock.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/clock/clock.component.ts ***!
  \*****************************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClockComponent = /** @class */ (function () {
    function ClockComponent() {
        var _this = this;
        this.arr60 = new Array(60);
        this.debug = false;
        this.datenow = new Date();
        this.now = Date.now();
        this.sDeg = Math.round(this.now / 1000) * 6;
        this.mDeg = this.now / 1000 / 60 * 6;
        this.hDeg = (this.now / 1000 / 60 / 60 + 3) * 30;
        setInterval(function () {
            _this.sDeg = Math.round(_this.now / 1000) * 6;
            _this.mDeg = _this.now / 1000 / 60 * 6;
            _this.hDeg = (_this.now / 1000 / 60 / 60 + 3) * 30;
            _this.now = Date.now();
            _this.datenow = new Date();
        }, 1000);
    }
    ClockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ClockComponent.prototype, "size", void 0);
    ClockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clock',
            template: __webpack_require__(/*! ./clock.component.html */ "./src/app/components/clock/clock.component.html"),
            styles: [__webpack_require__(/*! ./clock.component.css */ "./src/app/components/clock/clock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClockComponent);
    return ClockComponent;
}());



/***/ }),

/***/ "./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-task {\n  z-index: 8;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.65);\n}\n.new-task .content {\n  position: absolute;\n  left: 10%;\n  right: 10%;\n  top: 5%;\n  bottom: 15%;\n  background: white;\n  border: 3px solid black;\n  flex-direction: column;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.new-task .content .close-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 4vw;\n  width: 4vw;\n  line-height: 4vw;\n  text-align: center;\n  font-size: 200%;\n  cursor: pointer;\n  color: #270606;\n}\n.new-task .content .close-btn:hover {\n  color: #781010;\n}\n.new-task .content .title input {\n  width: 50%;\n}\n.new-task .content .date-time input {\n  width: 50%;\n}\n.new-task .content .error-message {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-task\">\n  <div class=\"content\">\n    <div class=\"close-btn\" [routerLink]=\"'../'\">\n      <i class=\"far fa-times-circle\"></i>\n    </div>\n\n    <h3>Добавить новую ежедневную задачу</h3>\n    <form (submit)=\"saveDailyTask()\" *ngIf=\"dailyTask\">\n      <p class=\"title\">\n        Title\n        <input type=\"text\" name=\"title\" id=\"title\" [(ngModel)]=\"dailyTask.title\">\n      </p>\n\n      <p>\n        <input type=\"time\" name=\"time\" id=\"time\" [ngModel]=\"dailyTask.time | date:'HH:mm'\" (ngModelChange)=\"setDailyTaskTime($event)\">\n      </p>\n      <!-- <p>миллисекунды {{dailyTask.time}}</p> -->\n      <!-- <p>по гринвичу {{dailyTask.time | date:'yyyy-MM-dd HH:mm'}}</p> -->\n      <!-- <p>{{dailyTask | json}}</p> -->\n      <p>{{dailyTask.time | date:'HH:mm'}}</p>\n      <p>\n        <input type=\"submit\" value=\"Сохранить\">\n      </p>\n    </form>\n    <div class=\"error-message\">{{errorMessage}}</div>\n  </div>\n</div>\n\n<!--  [ngStyle]=\"{\n  'display': displaytask ? 'block': 'none'\n}\" -->"

/***/ }),

/***/ "./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DailyTaskEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyTaskEditorComponent", function() { return DailyTaskEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DailyTaskEditorComponent = /** @class */ (function () {
    function DailyTaskEditorComponent(http, events, router, activatedRoute) {
        this.http = http;
        this.events = events;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dailyTask = null;
        this.errorMessage = '';
        this.timezoneOffset = new Date().getTimezoneOffset() * 60000;
    }
    DailyTaskEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params['id'];
        if (this.id) {
            this.http.getDailyTask(this.id).subscribe(function (date) {
                _this.dailyTask = date.json().dailyTask;
            });
        }
        else {
            this.dailyTask = {
                title: 'Новая ежедневная задача',
                time: (new Date().getTime()) % (1000 * 60 * 60 * 24)
            };
        }
    };
    DailyTaskEditorComponent.prototype.setDailyTaskTime = function (event) {
        this.dailyTask.time = new Date('1970-1-1 ' + event + ':00').getTime();
    };
    DailyTaskEditorComponent.prototype.getDailyTaskTime = function () {
        var time = new Date(this.dailyTask.time);
        var res = time.getHours() + ":" + time.getMinutes();
        return res;
    };
    DailyTaskEditorComponent.prototype.saveDailyTask = function () {
        var _this = this;
        this.http.saveDailyTask(this.dailyTask, this.id).subscribe(function (data) {
            _this.router.navigate(['/daily-tasks']);
            _this.events.refreshDailyTasksEvent.emit();
        }, function (data) {
            _this.errorMessage = data.json().err;
        });
    };
    DailyTaskEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-daily-task-editor',
            template: __webpack_require__(/*! ./daily-task-editor.component.html */ "./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.html"),
            styles: [__webpack_require__(/*! ./daily-task-editor.component.css */ "./src/app/components/daily-tasks/daily-task-editor/daily-task-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DailyTaskEditorComponent);
    return DailyTaskEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/daily-tasks/daily-tasks.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/daily-tasks/daily-tasks.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.container .control {\n  background: #e7e7e7;\n  border: 1px solid lightgray;\n  border-top: none;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  display: inline-flex;\n}\n.container .control .ctrl {\n  flex-grow: 1;\n  padding: 0 10%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.container .control .ctrl.daily label {\n  text-decoration: underline;\n}\n.container .control .ctrl.daily label:hover {\n  color: #0000ee;\n  text-decoration: underline;\n  transition: 90ms;\n}\n.container .control .ctrl span {\n  text-decoration: underline;\n}\n.container .control .ctrl span i {\n  display: inline-block;\n  margin-left: 5px;\n}\n.container .control .ctrl span:hover {\n  color: #0000ee;\n  text-decoration: underline;\n  transition: 90ms;\n}\n.container .tasks-list {\n  width: 100%;\n  padding: 1vw 3%;\n}\n.container .tasks-list .task {\n  margin-top: 1vw;\n  border-left: 1px solid gray;\n  position: relative;\n}\n.container .tasks-list .task::before,\n.container .tasks-list .task::after {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: linear-gradient(90deg, gray, lightgray, transparent);\n  content: \"\";\n}\n.container .tasks-list .task .date,\n.container .tasks-list .task .title {\n  padding: 0.2vw;\n  padding-left: 0.5vw;\n}\n.container .tasks-list .task .date {\n  background: linear-gradient(90deg, rgba(201, 201, 201, 0.6), transparent);\n  font-size: 75%;\n}\n.container .tasks-list .task .title {\n  background: linear-gradient(90deg, rgba(201, 201, 201, 0.4), transparent);\n  font-size: 115%;\n  position: relative;\n}\n.container .tasks-list .task .title a {\n  color: black;\n  text-decoration: none;\n}\n.container .tasks-list .task .title a:hover {\n  color: #0000ee;\n  text-decoration: underline;\n  transition: 90ms;\n}\n.container .tasks-list .task .buttons {\n  overflow: hidden;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 25%;\n  opacity: 0;\n  width: 120px;\n}\n.container .tasks-list .task .buttons .my.btn {\n  margin: 0 4px;\n}\n.container .tasks-list .task:hover .buttons {\n  opacity: 1;\n}\n.container .tasks-list .add-button {\n  padding: 0.5vw;\n  margin-top: 1vw;\n}\n.container .tasks-list .add-button span:hover {\n  cursor: pointer;\n  color: #0000ee;\n  text-decoration: underline;\n  transition: 90ms;\n}\n"

/***/ }),

/***/ "./src/app/components/daily-tasks/daily-tasks.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/daily-tasks/daily-tasks.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-today></app-today>\n<div class=\"container\">\n  <!-- <div class=\"control\">\n    \n  </div> -->\n\n  <div class=\"tasks-list\">\n    <div class=\"task\" *ngFor=\"let task of dailyTasks, let i = index\">\n      <div class=\"date\">\n        {{task.time | date:'dd.MM.yyyy HH:mm'}}\n      </div>\n      <div class=\"title\">\n        {{task.title}}\n      </div>\n      <div class=\"buttons\">\n        <div class=\"my btn\" [routerLink]=\"task._id\">\n          <i class=\"fas fa-pencil-alt\"></i>\n        </div>\n        <div class=\"my btn\" (click)=\"deleteDailyTask(task._id)\">\n          <i class=\"far fa-trash-alt\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"add-button\">\n      <a [routerLink]=\"'new'\">Новая задача...</a>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/daily-tasks/daily-tasks.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/daily-tasks/daily-tasks.component.ts ***!
  \*****************************************************************/
/*! exports provided: DailyTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyTasksComponent", function() { return DailyTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DailyTasksComponent = /** @class */ (function () {
    function DailyTasksComponent(http, events) {
        var _this = this;
        this.http = http;
        this.events = events;
        this.dailyTasks = null;
        this.hour = 1000 * 60 * 60;
        this.events.refreshDailyTasksEvent.subscribe(function () {
            _this.getDailyTasks();
        });
    }
    DailyTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDailyTasks();
        this.events.refreshTasksEvent.subscribe(function () {
            _this.getDailyTasks();
        });
    };
    DailyTasksComponent.prototype.getDailyTasks = function () {
        var _this = this;
        this.http.getDailyTasks().subscribe(function (data) {
            _this.dailyTasks = data.json().dailyTasks;
            _this.dailyTasks.sort(function (a, b) {
                return (a.time - b.time);
            });
        });
    };
    DailyTasksComponent.prototype.deleteDailyTask = function (id) {
        var _this = this;
        this.http.deleteDailyTasks(id).subscribe(function () {
            _this.events.refreshDailyTasksEvent.emit();
        });
    };
    DailyTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-daily-tasks',
            template: __webpack_require__(/*! ./daily-tasks.component.html */ "./src/app/components/daily-tasks/daily-tasks.component.html"),
            styles: [__webpack_require__(/*! ./daily-tasks.component.css */ "./src/app/components/daily-tasks/daily-tasks.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], DailyTasksComponent);
    return DailyTasksComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 100%;\n  display: inline-flex;\n  background: #f1f1f1;\n  padding: 15px 30px;\n  padding-left: 38px;\n  border-bottom: 1px solid lightgray;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.header .logo {\n  flex-grow: 0;\n  font-size: 25px;\n  cursor: pointer;\n}\n.header span,\n.header a {\n  color: black;\n  text-decoration: none;\n}\n.header span:hover,\n.header a:hover {\n  color: #0000ee;\n  text-decoration: underline;\n  transition: 90ms;\n}\n.header .spacer {\n  flex-grow: 1;\n}\n.header .header-right {\n  flex-grow: 0;\n}\n.header .header-right::before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.header .header-right span,\n.header .header-right a {\n  display: inline-block;\n  padding: 0 10px;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"logo\">\n    <a routerLink=\"/\">{{logo}}</a>\n  </div>\n\n  <div class=\"spacer\"></div>\n\n  <div class=\"header-right\">\n\n    <a routerLink=\"home\">\n      <i class=\"fas fa-home\"></i>\n    </a>\n\n    <!-- <a routerLink=\"pomodoro\">\n      Таймер\n    </a> -->\n\n    <!-- <a routerLink=\"board\" *ngIf=\"auth.isLoggedIn\">\n      Доска\n    </a> -->\n\n    <a routerLink=\"notes\" *ngIf=\"auth.isLoggedIn\">\n      Заметки\n    </a>\n\n    <a routerLink=\"tasks\" *ngIf=\"auth.isLoggedIn\">\n      Задачи\n    </a>\n    <a routerLink=\"daily-tasks\" *ngIf=\"auth.isLoggedIn\">\n      Ежедневные задачи\n    </a>\n    <!-- <a routerLink=\"today\" *ngIf=\"auth.isLoggedIn\">\n      Сегодня\n    </a> -->\n\n    <a routerLink=\"login\" *ngIf=\"!auth.isLoggedIn\">\n      Вход\n    </a>\n    <a routerLink=\"register\" *ngIf=\"!auth.isLoggedIn\">\n      Регистрация\n    </a>\n    <span (click)=\"auth.logOut()\" *ngIf=\"auth.isLoggedIn\">\n      Выйти\n    </span>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        this.logo = '2do';
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n<!-- <app-time-boxing [start]=\"start\" [end]=\"end\"></app-time-boxing> -->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.start = 1000 * 60 * 60 * 10;
        this.end = 1000 * 60 * 60 * 22;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/left-sidebar/left-sidebar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/left-sidebar/left-sidebar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/left-sidebar/left-sidebar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/left-sidebar/left-sidebar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  left-sidebar works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/left-sidebar/left-sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/left-sidebar/left-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidebarComponent", function() { return LeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftSidebarComponent = /** @class */ (function () {
    function LeftSidebarComponent() {
    }
    LeftSidebarComponent.prototype.ngOnInit = function () {
    };
    LeftSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-sidebar',
            template: __webpack_require__(/*! ./left-sidebar.component.html */ "./src/app/components/left-sidebar/left-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar.component.css */ "./src/app/components/left-sidebar/left-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftSidebarComponent);
    return LeftSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  navbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/note-editor/note-editor.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/notes/note-editor/note-editor.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.container .content {\n  background: white;\n  left: 10%;\n  right: 10%;\n}\n"

/***/ }),

/***/ "./src/app/components/notes/note-editor/note-editor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/notes/note-editor/note-editor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/notes/note-editor/note-editor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/notes/note-editor/note-editor.component.ts ***!
  \***********************************************************************/
/*! exports provided: NoteEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteEditorComponent", function() { return NoteEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteEditorComponent = /** @class */ (function () {
    function NoteEditorComponent() {
    }
    NoteEditorComponent.prototype.ngOnInit = function () {
    };
    NoteEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note-editor',
            template: __webpack_require__(/*! ./note-editor.component.html */ "./src/app/components/notes/note-editor/note-editor.component.html"),
            styles: [__webpack_require__(/*! ./note-editor.component.css */ "./src/app/components/notes/note-editor/note-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoteEditorComponent);
    return NoteEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/note/note.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/notes/note/note.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.container .space {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.container .content {\n  z-index: 2;\n  border: 3px solid black;\n  border-radius: 5%;\n  position: absolute;\n  background: white;\n  left: 10%;\n  right: 10%;\n  top: 20%;\n  padding: 1vw 2vw;\n}\n.container .content .title {\n  text-align: center;\n}\n.container .content .body {\n  margin-bottom: 10px;\n}\n.container .content .close-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 4vw;\n  width: 4vw;\n  line-height: 4vw;\n  text-align: center;\n  font-size: 200%;\n  cursor: pointer;\n  color: #270606;\n}\n.container .content .close-btn:hover {\n  color: #781010;\n}\n"

/***/ }),

/***/ "./src/app/components/notes/note/note.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/notes/note/note.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"space\" (click)=\"saveAndClose()\"></div>\n  <div class=\"content\" *ngIf=\"note\">\n\n    <div class=\"close-btn\" (click)=\"saveAndClose()\">\n      <i class=\"far fa-times-circle\"></i>\n    </div>\n\n    <h3 class=\"title\" role=\"textbox\" contenteditable=\"true\" aria-multiline=\"true\" [innerHtml]=\"title\" (input)=\"note.title=$event.srcElement.innerHTML; changed = true\"></h3>\n    <hr>\n\n    <div class=\"body\" role=\"textbox\" contenteditable=\"true\" aria-multiline=\"true\" [textContent]=\"body\" (input)=\"note.body=$event.srcElement.innerHTML; changed = true\"></div>\n\n    <!-- <p>{{note | json}}</p> -->\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/notes/note/note.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/notes/note/note.component.ts ***!
  \*********************************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoteComponent = /** @class */ (function () {
    function NoteComponent(http, router, activatedRoute, events) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.events = events;
        this.title = '';
        this.body = '';
        this.note = null;
        this.changed = false;
    }
    Object.defineProperty(NoteComponent.prototype, "_id", {
        get: function () {
            return this.activatedRoute.snapshot.params.id;
        },
        enumerable: true,
        configurable: true
    });
    NoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getOneNoteById(this._id).subscribe(function (data) {
            _this.note = data.json().note;
            _this.title = _this.note.title;
            _this.body = _this.note.body;
        });
    };
    NoteComponent.prototype.setBody = function (event) {
        console.log(event);
    };
    NoteComponent.prototype.saveAndClose = function () {
        var _this = this;
        console.log(this.note);
        if (this.changed /* && confirm('Сохранить изменения')*/) {
            this.http.saveNote(this.note).subscribe(function () {
                _this.events.refreshNotes.emit();
            });
        }
        this.router.navigate(['/notes']);
    };
    NoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note',
            template: __webpack_require__(/*! ./note.component.html */ "./src/app/components/notes/note/note.component.html"),
            styles: [__webpack_require__(/*! ./note.component.css */ "./src/app/components/notes/note/note.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]])
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/notes.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/notes/notes.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 1vw;\n  padding: 0 1%;\n  padding: 1vw 3%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.container .notes .note {\n  margin-top: 1vw;\n  border-left: 1px solid gray;\n  position: relative;\n}\n.container .notes .note::before,\n.container .notes .note::after {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: linear-gradient(90deg, gray, lightgray, transparent);\n  content: \"\";\n}\n.container .notes .note .title,\n.container .notes .note .body {\n  padding: 0.2vw;\n  padding-left: 0.5vw;\n}\n.container .notes .note .title {\n  background: linear-gradient(90deg, rgba(201, 201, 201, 0.6), transparent);\n  font-size: 115%;\n}\n.container .notes .note .title a {\n  color: black;\n  text-decoration: none;\n}\n.container .notes .note .title a:hover {\n  color: blue;\n  text-decoration: underline;\n}\n.container .notes .note .title .my.btn {\n  padding: 0 1%;\n  margin-left: 2%;\n  opacity: 0;\n  transition: 100ms;\n}\n.container .notes .note .title:hover .my.btn {\n  opacity: 1;\n}\n.container .notes .note .body {\n  background: linear-gradient(90deg, rgba(201, 201, 201, 0.4), transparent);\n  font-size: 75%;\n  position: relative;\n}\n.container .add {\n  padding: 0.5vw;\n  margin-top: 1vw;\n}\n.container .add span:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  transition: 90ms;\n}\n"

/***/ }),

/***/ "./src/app/components/notes/notes.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/notes/notes.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"notes\" *ngIf=\"notes\">\n\n    <div class=\"note\" *ngFor=\"let note of notes, let i = index\">\n      <div class=\"title\">\n        <a [routerLink]=\"note._id\">\n          {{note.title}}\n        </a>\n        <div class=\"my btn\" (click)=\"deleteNote(note._id)\">\n          <i class=\"far fa-trash-alt\"></i>\n        </div>\n      </div>\n      <div class=\"body\">\n        <span>\n          {{note.body}}\n        </span>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"add\">\n    <a href=\"javascript:void(0)\" (click)=\"addNote()\">Новая заметка...</a>\n  </div>\n\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/notes/notes.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/notes/notes.component.ts ***!
  \*****************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotesComponent = /** @class */ (function () {
    function NotesComponent(http, router, events) {
        this.http = http;
        this.router = router;
        this.events = events;
        this.notes = null;
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNotes();
        this.events.refreshNotes.subscribe(function () {
            _this.getNotes();
        });
    };
    NotesComponent.prototype.getNotes = function () {
        var _this = this;
        this.http.getNotes().subscribe(function (data) {
            _this.notes = data.json().notes;
        });
    };
    NotesComponent.prototype.addNote = function () {
        var _this = this;
        this.http.addNewNote().subscribe(function (data) {
            console.log(data.json());
            _this.router.navigate(['notes/' + data.json()._id]);
        });
    };
    NotesComponent.prototype.deleteNote = function (id) {
        var _this = this;
        // console.log(id);
        this.http.deleteNote(id).subscribe(function () {
            _this.getNotes();
        });
    };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/components/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.css */ "./src/app/components/notes/notes.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/components/ping/ping.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/ping/ping.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/ping/ping.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/ping/ping.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"my btn\" (click)=\"ping()\">\n    Ping !\n  </div>\n  <div class=\"response\">\n    {{response | json}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ping/ping.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/ping/ping.component.ts ***!
  \***************************************************/
/*! exports provided: PingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingComponent", function() { return PingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PingComponent = /** @class */ (function () {
    function PingComponent(auth) {
        this.auth = auth;
        this.response = {};
    }
    PingComponent.prototype.ping = function () {
        var _this = this;
        this.auth.ping().subscribe(function (data) {
            _this.response = data.json();
        });
    };
    PingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ping',
            template: __webpack_require__(/*! ./ping.component.html */ "./src/app/components/ping/ping.component.html"),
            styles: [__webpack_require__(/*! ./ping.component.css */ "./src/app/components/ping/ping.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PingComponent);
    return PingComponent;
}());



/***/ }),

/***/ "./src/app/components/pomodoro/pomodoro.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/pomodoro/pomodoro.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center;\n}\n.container .title {\n  padding: 0;\n  margin-bottom: 10px;\n}\n.container .display-time-left {\n  font-size: 200%;\n  padding: 2vw;\n}\n.container .end-of-timer .result {\n  padding: 1vw;\n}\n.new-task-window .background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.new-task-window .background .content {\n  position: absolute;\n  top: 10%;\n  left: 20%;\n  right: 20%;\n  bottom: 15%;\n  background: white;\n  border: 2px solid black;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.new-task-window .background .content > div {\n  flex-grow: 1;\n}\n.new-task-window .background .content > div .set-title {\n  width: 60%;\n}\n.new-task-window .background .content > div .display-time {\n  font-size: 200%;\n}\n.new-task-window .background .content > div .set-time {\n  width: 60%;\n}\n"

/***/ }),

/***/ "./src/app/components/pomodoro/pomodoro.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pomodoro/pomodoro.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h2 class=\"title\">\n        {{task.title.length > 0 ? task.title: 'Нет задачи'}}\n    </h2>\n\n    <div class=\"display-time-left\">\n        {{task.time | TimeFromMillisecondsPipe}}\n    </div>\n\n    <div class=\"control\">\n        <div class=\"my btn\" *ngIf=\"!readyToStart && !working\" (click)=\"newTask()\">\n            <i class=\"fas fa-plus\" *ngIf=\"!working\"></i>\n            Новая задача\n        </div>\n        <div class=\"my btn\" *ngIf=\"readyToStart && !working\" (click)=\"start()\">\n            <i class=\"far fa-play-circle\" *ngIf=\"!working\"></i>\n            Старт\n        </div>\n        <div class=\"my btn\" *ngIf=\"working\" (click)=\"drop(true)\">\n            <i class=\"far fa-stop-circle\" *ngIf=\"working\"></i>\n            Сбросить\n        </div>\n    </div>\n\n    <div class=\"end-of-timer\" *ngIf=\"mark !== null\">\n        <div class=\"result\">\n            <div class=\"my btn\" *ngFor=\"let i of [1, 2, 3, 4, 5]\" (click)=\"setMark(i)\">\n                <!-- fas => сплошной -->\n                <i [ngClass]=\"{\n                    'fas': mark >= i,\n                    'far': ! (mark >= i),\n                    'fa-star': true\n                }\" [ngStyle]=\"{\n                    'color': mark >= i ? 'gold': 'lightgray'\n                }\"></i>\n            </div>\n        </div>\n\n        <div class=\"my btn\" (click)=\"save()\">\n            Сохранить\n        </div>\n    </div>\n\n</div>\n\n<div class=\"new-task-window\" [ngStyle]=\"{\n    'display': displayNewTaskWindow ? 'block': 'none'\n}\">\n    <div class=\"background\">\n        <div class=\"content\">\n            <div class=\"spacer\"></div>\n            <div>\n                <input class=\"set-title\" type=\"text\" [(ngModel)]=\"task.title\" placeholder=\"Заголовок\">\n            </div>\n            <div>\n                <span class=\"display-time\">{{task.time | TimeFromMillisecondsPipe}} </span>\n            </div>\n            <div>\n                <input [attr.disabled]=\"working ? '': null\" class=\"set-time\" type=\"range\" min=\"0\" max=\"7200000\" step=\"300000\" value=\"0\" [(ngModel)]=\"task.time\">\n            </div>\n            <div>\n                <div class=\"my btn\" (click)=\"setTask()\">\n                    Сохранить задачу\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pomodoro/pomodoro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pomodoro/pomodoro.component.ts ***!
  \***********************************************************/
/*! exports provided: PomodoroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomodoroComponent", function() { return PomodoroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PomodoroComponent = /** @class */ (function () {
    function PomodoroComponent() {
        this.task = {
            title: '',
            time: 0
        };
        this.working = false;
        this.readyToStart = false;
        this.timeLeft = 0;
        this.mark = null;
        this.interval = null;
        this.displayNewTaskWindow = false;
    }
    PomodoroComponent.prototype.setMark = function (i) { this.mark = i; };
    PomodoroComponent.prototype.newTask = function () {
        this.displayNewTaskWindow = true;
    };
    PomodoroComponent.prototype.setTask = function () {
        if (this.task.title.length < 1)
            return alert('Введите заголовок');
        if (this.task.time <= 0)
            return alert('Введите время');
        this.displayNewTaskWindow = false;
        this.readyToStart = true;
    };
    PomodoroComponent.prototype.start = function () {
        /**
         * сохранить в бд
         */
        var _this = this;
        var startDate = Date.now();
        var endDate = startDate + this.task.time;
        this.working = true;
        this.interval = setInterval(function () {
            var newTimeLeft = endDate - Date.now();
            if (newTimeLeft > 0)
                _this.task.time = newTimeLeft;
            else {
                // save or drop
                clearInterval(_this.interval);
                _this.task.time = 0;
                _this.mark = 3; // это отображает форму для выставления оценки 
                // своей работы, функция выставления оценки после выполнения скроет форму
            }
        }, 250);
    };
    PomodoroComponent.prototype.save = function () {
        if (!confirm('Сохранить с оценкой ' + this.mark))
            return;
        /**
         * сохранить в бд, дело закончено, оценка...
         */
        alert('Сохранено');
        this.drop(false);
    };
    PomodoroComponent.prototype.drop = function (user) {
        if (user)
            if (!confirm('Точно сбросить таймер?')) {
                // set all defaults
                /**
                 * удалить из бд если user
                 */
                clearInterval(this.interval);
                this.mark = null;
                this.task = {
                    title: '',
                    time: 1500
                };
                this.working = false;
                this.readyToStart = false;
                console.log('default');
                console.log(this);
            }
    };
    PomodoroComponent.prototype.ngOnInit = function () {
    };
    PomodoroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pomodoro',
            template: __webpack_require__(/*! ./pomodoro.component.html */ "./src/app/components/pomodoro/pomodoro.component.html"),
            styles: [__webpack_require__(/*! ./pomodoro.component.css */ "./src/app/components/pomodoro/pomodoro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PomodoroComponent);
    return PomodoroComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add padding to containers */\n.container {\n  padding: 16px;\n  background-color: white;\n}\n/* Full-width input fields */\ninput[type=text],\ninput[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\ninput[type=text]:focus,\ninput[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n/* Overwrite default styles of hr */\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n/* Set a style for the submit button */\n.registerbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n.registerbtn:hover {\n  opacity: 1;\n}\n/* Add a blue text color to links */\na {\n  color: dodgerblue;\n}\n/* Set a grey background color and center the text of the \"sign in\" section */\n.signin {\n  background-color: #f1f1f1;\n  text-align: center;\n}\n.error-message {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"login()\">\n  <div class=\"container\">\n    <h1>Вход</h1>\n    <!-- <p>Please fill in this form to create an account.</p> -->\n    <hr>\n\n    <label for=\"username\"><b>Username</b></label>\n    <input type=\"text\" placeholder=\"Enter username\" name=\"username\" required [(ngModel)]=\"user.username\"\n      (ngModelChange)=\"clearError()\" pattern=\"[a-zA-Z0-9_]{4,32}\" #username=\"ngModel\" [ngStyle]=\"{\n      border: username.valid ? '1px solid green': null\n    }\">\n\n    <label for=\"psw\"><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required [(ngModel)]=\"user.password\" (ngModelChange)=\"clearError()\"\n      pattern=\"[a-zA-Z0-9_]{6,32}\" #psw=\"ngModel\" [ngStyle]=\"{\n      border: psw.valid ? '1px solid green': null\n    }\">\n    <div class=\"error-message\">\n      {{errorMessage}}\n    </div>\n    <hr>\n    <!-- <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p> -->\n\n    <button type=\"submit\" class=\"registerbtn\">Войти</button>\n  </div>\n\n  <div class=\"container signin\">\n    <p>Нет аккантка? <a [routerLink]=\"['/register']\">Зарегестрируйтесь.</a>.</p>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {
            username: '',
            password: ''
        };
        this.errorMessage = ' ';
    }
    SignInComponent.prototype.clearError = function () {
        this.errorMessage = ' ';
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        this.auth.logIn(this.user, function (data) {
            console.log(data);
            if (data.status == 200)
                _this.router.navigate(['/home']);
            else
                _this.errorMessage = data.json().message;
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add padding to containers */\n.container {\n  padding: 16px;\n  background-color: white;\n}\n/* Full-width input fields */\ninput[type=text],\ninput[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\ninput[type=text]:focus,\ninput[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n/* Overwrite default styles of hr */\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n/* Set a style for the submit button */\n.registerbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n.registerbtn:hover {\n  opacity: 1;\n}\n/* Add a blue text color to links */\na {\n  color: dodgerblue;\n}\n/* Set a grey background color and center the text of the \"sign in\" section */\n.signin {\n  background-color: #f1f1f1;\n  text-align: center;\n}\n.error-message {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"register()\">\n  <div class=\"container\">\n    <h1>Регистрация</h1>\n    <!-- <p>Please fill in this form to create an account.</p> -->\n    <hr>\n\n    <label for=\"username\"><b>Username</b></label>\n    <input type=\"text\" placeholder=\"Enter username\" name=\"username\" required [(ngModel)]=\"user.username\"\n      (ngModelChange)=\"clearError()\" pattern=\"[a-zA-Z0-9_]{4,32}\" #username=\"ngModel\" [ngStyle]=\"{\n      border: username.valid ? '1px solid green': null\n    }\">\n\n    <label for=\"psw\"><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required [(ngModel)]=\"user.password\" (ngModelChange)=\"clearError()\"\n      pattern=\"[a-zA-Z0-9_]{6,32}\" #psw=\"ngModel\" [ngStyle]=\"{\n      border: psw.valid ? '1px solid green': null\n    }\">\n\n    <label for=\"pswrepeat\"><b>Repeat Password</b></label>\n    <input type=\"password\" placeholder=\"Repeat Password\" name=\"pswrepeat\" required [(ngModel)]=\"user.repeatingpassword\"\n      (ngModelChange)=\"clearError()\" pattern=\"[a-zA-Z0-9_]{6,32}\" #pswrepeat=\"ngModel\" [ngStyle]=\"{\n      border: psw.valid && psw.value == pswrepeat.value ? '1px solid green': null\n    }\">\n    <div class=\"error-message\">\n      {{errorMessage}}\n    </div>\n    <hr>\n    <!-- <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p> -->\n\n    <button type=\"submit\" class=\"registerbtn\">Зарегестрироваться</button>\n  </div>\n\n  <div class=\"container signin\">\n    <p>Уже есть аккаунт? <a [routerLink]=\"['/login']\">Войдите.</a>.</p>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {
            username: '',
            password: '',
            repeatingpassword: ''
        };
        this.errorMessage = ' ';
    }
    SignUpComponent.prototype.clearError = function () {
        this.errorMessage = ' ';
    };
    SignUpComponent.prototype.register = function () {
        var _this = this;
        console.log(this.user);
        this.auth.register(this.user, function (data) {
            console.log(data);
            if (data.status == 200)
                _this.router.navigate(['/home']);
            else
                _this.errorMessage = data.json().message;
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks/task-editor/task-editor.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/tasks/task-editor/task-editor.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-task {\n  z-index: 8;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.65);\n}\n.new-task .content {\n  position: absolute;\n  left: 10%;\n  right: 10%;\n  top: 5%;\n  bottom: 15%;\n  background: white;\n  border: 3px solid black;\n  flex-direction: column;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.new-task .content .close-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 4vw;\n  width: 4vw;\n  line-height: 4vw;\n  text-align: center;\n  font-size: 200%;\n  cursor: pointer;\n  color: #270606;\n}\n.new-task .content .close-btn:hover {\n  color: #781010;\n}\n.new-task .content .title input {\n  width: 50%;\n}\n.new-task .content .date-time input {\n  width: 50%;\n}\n.new-task .content .error-message {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/components/tasks/task-editor/task-editor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/tasks/task-editor/task-editor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-task\">\n  <div class=\"content\">\n    <div class=\"close-btn\" [routerLink]=\"'../'\">\n      <i class=\"far fa-times-circle\"></i>\n    </div>\n\n    <h3>Добавить новую задачу</h3>\n    <form (submit)=\"savetask()\" *ngIf=\"task\">\n      <p class=\"title\">\n        Title\n        <input type=\"text\" name=\"title\" id=\"title\" [(ngModel)]=\"task.title\">\n      </p>\n\n      <p>\n        <input type=\"datetime-local\" name=\"datetime\" id=\"datetime\" [ngModel]=\"task.datetime | date:'yyyy-MM-ddTHH:mm'\"\n          (ngModelChange)=\"setTaskTime($event)\">\n      </p>\n      <!-- <p>местное {{task.datetime - timezoneOffset | date:'yyyy-MM-dd HH:mm'}}</p> -->\n      <!-- <p>по гринвичу {{task.datetime | date:'yyyy-MM-dd HH:mm'}}</p> -->\n\n      <p>\n        <input type=\"submit\" value=\"Сохранить\">\n      </p>\n    </form>\n\n    <div class=\"error-message\">{{errorMessage}}</div>\n  </div>\n</div>\n\n<!--  [ngStyle]=\"{\n  'display': displaytask ? 'block': 'none'\n}\" -->"

/***/ }),

/***/ "./src/app/components/tasks/task-editor/task-editor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/tasks/task-editor/task-editor.component.ts ***!
  \***********************************************************************/
/*! exports provided: TaskEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditorComponent", function() { return TaskEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskEditorComponent = /** @class */ (function () {
    function TaskEditorComponent(http, events, router, activatedRoute) {
        this.http = http;
        this.events = events;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.task = null;
        this.errorMessage = '';
        this.timezoneOffset = new Date().getTimezoneOffset() * 60000;
    }
    TaskEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params['id'];
        if (this.id) {
            this.http.getTask(this.id).subscribe(function (date) {
                _this.task = date.json().task;
            });
        }
        else {
            this.task = {
                title: 'Новая задача',
                datetime: new Date().getTime() + this.timezoneOffset
            };
        }
    };
    TaskEditorComponent.prototype.setTaskTime = function (event) {
        console.log(event);
        if (new Date(event))
            this.task.datetime = new Date(event).getTime();
    };
    TaskEditorComponent.prototype.getTaskTime = function () {
        var time = new Date(this.task.datetime);
        // 2018-09-09T15:00
        var res = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDay() + "T" + time.getHours() + ":" + time.getMinutes();
        return res;
    };
    TaskEditorComponent.prototype.savetask = function () {
        var _this = this;
        this.http.saveTask(this.task, this.id).subscribe(function (data) {
            _this.router.navigate(['/tasks']);
            _this.events.refreshTasksEvent.emit();
        }, function (data) {
            _this.errorMessage = data.json().err;
        });
    };
    TaskEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-editor',
            template: __webpack_require__(/*! ./task-editor.component.html */ "./src/app/components/tasks/task-editor/task-editor.component.html"),
            styles: [__webpack_require__(/*! ./task-editor.component.css */ "./src/app/components/tasks/task-editor/task-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TaskEditorComponent);
    return TaskEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks/tasks.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.container .control {\n  background: #e7e7e7;\n  border: 1px solid lightgray;\n  border-top: none;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  display: inline-flex;\n}\n.container .control .ctrl {\n  flex-grow: 1;\n  padding: 0 10%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.container .control .ctrl.daily label {\n  text-decoration: underline;\n}\n.container .control .ctrl.daily label:hover {\n  color: #0000ee;\n  text-decoration: underline;\n  transition: 90ms;\n}\n.container .control .ctrl span {\n  text-decoration: underline;\n}\n.container .control .ctrl span i {\n  display: inline-block;\n  margin-left: 5px;\n}\n.container .control .ctrl span:hover {\n  color: #0000ee;\n  text-decoration: underline;\n  transition: 90ms;\n}\n.container .tasks-list {\n  width: 100%;\n  padding: 1vw 3%;\n}\n.container .tasks-list .task {\n  margin-top: 1vw;\n  border-left: 1px solid gray;\n  position: relative;\n}\n.container .tasks-list .task::before,\n.container .tasks-list .task::after {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: linear-gradient(90deg, gray, lightgray, transparent);\n  content: \"\";\n}\n.container .tasks-list .task .date,\n.container .tasks-list .task .title {\n  padding: 0.2vw;\n  padding-left: 0.5vw;\n}\n.container .tasks-list .task .date {\n  background: linear-gradient(90deg, rgba(201, 201, 201, 0.6), transparent);\n  font-size: 75%;\n}\n.container .tasks-list .task .title {\n  background: linear-gradient(90deg, rgba(201, 201, 201, 0.4), transparent);\n  font-size: 115%;\n  position: relative;\n}\n.container .tasks-list .task .buttons {\n  overflow: hidden;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 25%;\n  opacity: 0;\n  width: 120px;\n}\n.container .tasks-list .task .buttons .my.btn {\n  margin: 0 4px;\n}\n.container .tasks-list .task:hover .buttons {\n  opacity: 1;\n}\n.container .tasks-list .task.today {\n  border-left: 1px solid crimson;\n}\n.container .tasks-list .task.today::before,\n.container .tasks-list .task.today::after {\n  background: linear-gradient(90deg, darkred, transparent 40%);\n}\n.container .tasks-list .add-button {\n  padding: 0.5vw;\n  margin-top: 1vw;\n}\n.container .tasks-list .add-button span:hover {\n  cursor: pointer;\n  color: #0000ee;\n  text-decoration: underline;\n  transition: 90ms;\n}\n"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-today></app-today>\n<div class=\"container\">\n  <div class=\"control\">\n    <div class=\"ctrl daily\">\n      <label>\n        <input type=\"checkbox\" [(ngModel)]=\"hidePast\" style=\"display: none\"> {{hidePast ? 'Показать прошедшые': 'Скрыть\n        прошедшие'}}\n      </label>\n    </div>\n  </div>\n\n  <div class=\"tasks-list\">\n    <div class=\"task\" *ngFor=\"let task of tasks, let i = index\" [ngStyle]=\"{\n      'display': hidePast && isPast(task.datetime) ? 'none': null\n    }\"\n      [ngClass]=\"{\n      'today': isToday(task.datetime)\n    }\">\n      <!-- <div class=\"border\"></div> -->\n      <div class=\"date\">{{task.datetime | date:'dd.MM.yyyy HH:mm'}}</div>\n      <div class=\"title\">\n        {{task.title}}\n      </div>\n      <!-- <div class=\"border\"></div> -->\n      <div class=\"buttons\">\n        <div class=\"my btn\" [routerLink]=\"task._id\">\n          <i class=\"fas fa-pencil-alt\"></i>\n        </div>\n        <div class=\"my btn\" (click)=\"deleteTask(task._id)\">\n          <i class=\"far fa-trash-alt\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"add-button\">\n      <a [routerLink]=\"'new'\">Новая задача...</a>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.ts ***!
  \*****************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksComponent = /** @class */ (function () {
    function TasksComponent(http, events) {
        var _this = this;
        this.http = http;
        this.events = events;
        this.tasks = null;
        this.hour = 1000 * 60 * 60;
        this.hidePast = true;
        this.today = new Date();
        this.timezoneOffset = new Date().getTimezoneOffset() * 60000;
        this.events.refreshTasksEvent.subscribe(function () {
            _this.getTasks();
        });
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TasksComponent.prototype.isPast = function (date) {
        return new Date(date) < new Date();
    };
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.http.getTasks().subscribe(function (date) {
            _this.tasks = date.json().tasks;
            _this.tasks.sort(function (a, b) {
                return (a.datetime - b.datetime);
            });
        });
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.http.deleteTasks(id).subscribe(function (data) {
            _this.getTasks();
        });
    };
    TasksComponent.prototype.isToday = function (time) {
        var start = new Date();
        start.setHours(0, 0, 0, 0);
        var end = new Date();
        end.setHours(23, 59, 59, 999);
        return new Date(time) > start && new Date(time) < end;
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/components/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/components/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/components/time-boxing/time-boxing.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/time-boxing/time-boxing.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=time-boxing.component.css.map */\n.container .clock {\n  text-align: center;\n}\n.container .clock > div {\n  display: inline-block;\n}\n.container .meta {\n  padding: 5px 10%;\n}\n.container .table {\n  position: relative;\n}\n.container .table .row {\n  border-top: 0.5px solid lightgray;\n  box-sizing: border-box;\n}\n.container .table .row:last-child {\n  border-bottom: 0.5px solid rgba(30, 30, 30, 0.8);\n}\n.container .table .boxes {\n  height: 100%;\n  background-image: repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.025), rgba(0, 0, 0, 0.025) 10px, rgba(10, 80, 15, 0.08) 10px, rgba(10, 80, 15, 0.08) 20px);\n  position: absolute;\n  top: 0;\n  left: 60px;\n  right: 0;\n}\n.container .table .boxes .card {\n  background: white;\n  border: 0.5px solid lightgray;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n  position: absolute;\n  overflow: hidden;\n  text-align: center;\n}\n.container .table .boxes .card.left {\n  left: 0;\n  right: 50%;\n}\n.container .table .boxes .card.right {\n  left: 50%;\n  right: 0;\n}\n.container .table .boxes .card:hover {\n  z-index: 10;\n}\n.container .table .boxes .card .title {\n  text-align: center;\n  cursor: pointer;\n}\n.container .table .boxes .card .title:hover {\n  color: #1a0dab;\n  text-decoration: underline;\n}\n.container .table .boxes .event {\n  background: transparent;\n  border-top: 0.5px solid red;\n  width: 40%;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n  position: absolute;\n  overflow: visible;\n  z-index: 5;\n  height: 1px;\n}\n.container .table .boxes .event.left {\n  left: 0;\n  text-align: left;\n}\n.container .table .boxes .event.right {\n  right: 0;\n  text-align: right;\n}\n.container .table .boxes .event:hover {\n  overflow: visible;\n  z-index: 10;\n}\n.container .table .boxes .event .title {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  max-width: 100%;\n  text-align: inherit;\n  height: 16px;\n  line-height: 16px;\n  cursor: pointer;\n}\n.container .table .boxes .event .title:hover {\n  color: #1a0dab;\n  text-decoration: underline;\n}\n"

/***/ }),

/***/ "./src/app/components/time-boxing/time-boxing.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/time-boxing/time-boxing.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n\n    <div class=\"row\" *ngFor=\"let t of timesArray, let i = index\" [ngStyle]=\"\n        {\n          'height': t.height + 'px',\n          'display': ((t.milliseconds >= dayStart.milliseconds)&&(t.milliseconds <= dayEnd.milliseconds)) ? '' : 'none',\n          'border-top': (t.milliseconds % (hour * 6) == 0) ? '': ''\n        }\n      \">\n      {{t.timeString}}\n    </div>\n\n    <div class=\"boxes\">\n      <div class=\"card\" *ngFor=\"let task of boxes\" [ngStyle]=\"\n          {\n            'top': task.start / hour * hourHeight - dayStart.milliseconds / hour * hourHeight + 'px',\n            'height': task.timeConsumption / hour * hourHeight + 'px',\n            'line-height': task.timeConsumption / hour * hourHeight + 'px'\n          }\" [ngClass]=\"{\n            'left': true\n          }\">\n        <span class=\"title\">{{task.title}}</span>\n      </div>\n      <div class=\"event\" *ngFor=\"let event of events\" [ngStyle]=\"\n          {\n            'top': event.time / hour * hourHeight - dayStart.milliseconds / hour * hourHeight + 'px',\n            'height': event.timeConsumption / hour * hourHeight + 'px',\n            'line-height': event.timeConsumption / hour * hourHeight + 'px'\n          }\" [ngClass]=\"{\n            'left': true\n          }\">\n        <span class=\"title\">{{event.title}}</span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/time-boxing/time-boxing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/time-boxing/time-boxing.component.ts ***!
  \*****************************************************************/
/*! exports provided: TimeBoxingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeBoxingComponent", function() { return TimeBoxingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/time */ "./src/app/classes/time.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeBoxingComponent = /** @class */ (function () {
    function TimeBoxingComponent() {
        this.today = 'Понедельник';
        this.boxes = null;
        this.events = null;
        this.timesArray = [];
        this.hourHeight = 60;
        this.minute = 1000 * 60;
        this.hour = 1000 * 60 * 60;
        this.dayStart = new _classes_time__WEBPACK_IMPORTED_MODULE_1__["Time"](this.hour * 4);
        this.dayEnd = new _classes_time__WEBPACK_IMPORTED_MODULE_1__["Time"](this.hour * 22);
        var n = 24;
        for (var i = 0; i < n; i++) {
            this.timesArray.push({
                timeString: "" + _classes_time__WEBPACK_IMPORTED_MODULE_1__["Time"].getTimeString(i * 1000 * 60 * 60 * 24 / n),
                height: this.hourHeight / (n / 24),
                milliseconds: i * 1000 * 60 * 60 * 24 / n
            });
        }
    }
    TimeBoxingComponent.prototype.ngOnInit = function () {
        if (this.start && this.end) {
            this.dayStart = new _classes_time__WEBPACK_IMPORTED_MODULE_1__["Time"](this.start);
            this.dayEnd = new _classes_time__WEBPACK_IMPORTED_MODULE_1__["Time"](this.end);
        }
        this.boxes = [
            {
                _id: '0',
                title: 'HTML + CSS',
                body: "",
                start: this.hour * 11,
                timeConsumption: this.minute * 20,
                owner_id: '231312'
            },
            {
                _id: '0',
                title: 'Javascript',
                body: "\u043E\u0442\u0436\u0438\u043C\u0430\u043D\u0438\u044F: 30\n\u043F\u0440\u0438\u0441\u0435\u0434\u0430\u043D\u0438\u044F: 50\n\u043F\u0440\u0435\u0441\u0441: 30\n\u0441\u043A\u0430\u043A\u0430\u043B\u043A\u0430: 100",
                start: this.hour * 12 + this.minute * 0,
                timeConsumption: this.hour * 1 + this.minute * 20,
                owner_id: '231312'
            },
        ];
        this.events = [
            {
                _id: '5',
                title: 'Подъем',
                time: this.hour * 5,
                owner_id: '231312'
            },
            {
                _id: '7',
                title: 'Позвонить на счет заказа',
                time: this.hour * 15,
                owner_id: '231312'
            }
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimeBoxingComponent.prototype, "start", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimeBoxingComponent.prototype, "end", void 0);
    TimeBoxingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-boxing',
            template: __webpack_require__(/*! ./time-boxing.component.html */ "./src/app/components/time-boxing/time-boxing.component.html"),
            styles: [__webpack_require__(/*! ./time-boxing.component.css */ "./src/app/components/time-boxing/time-boxing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeBoxingComponent);
    return TimeBoxingComponent;
}());



/***/ }),

/***/ "./src/app/components/today/today.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/today/today.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  padding-left: 1%;\n  margin-top: 1vw;\n}\n.container .this-day {\n  width: 100%;\n  height: 120px;\n  background: #f7f7f7;\n  position: relative;\n}\n.container .this-day .hour-hatch {\n  display: inline-block;\n  height: 100%;\n  width: 1px;\n  position: absolute;\n  background: linear-gradient(transparent, lightgray, lightgray);\n}\n.container .this-day .hour-hatch .time {\n  display: inline-block;\n  font-size: 10px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.container .this-day .task {\n  position: absolute;\n  width: 1px;\n  background: linear-gradient(transparent, red, red, red);\n  display: inline-block;\n  top: 20px;\n  bottom: 0;\n}\n.container .this-day .task .label {\n  position: absolute;\n  display: inline-block;\n  left: 3px;\n  align-items: center;\n  z-index: 3;\n  cursor: pointer;\n  white-space: nowrap;\n  align-content: flex-end;\n}\n.container .this-day .task .label:hover {\n  color: #0000ee;\n  text-decoration: underline;\n  transition: 90ms;\n  z-index: 5;\n}\n.container .this-day .task .label .border-bottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: linear-gradient(90deg, red, rgba(70, 9, 9, 0));\n}\n.container .this-day .task.daily {\n  background: linear-gradient(transparent, #00ff00, #00ff00, #00ff00);\n}\n.container .this-day .task.daily .label .border-bottom {\n  background: linear-gradient(90deg, #00ff00, rgba(70, 9, 9, 0));\n}\n"

/***/ }),

/***/ "./src/app/components/today/today.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/today/today.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  {{timezone}}\n  <div class=\"this-day\">\n    <div class=\"hour-hatch\" *ngFor=\"let ar of arr24, let i = index\" [ngStyle]=\"{\n      'left': ((i - dayStart) / (24 - dayStart - (24 - dayEnd))) * 100 + '%'\n    }\">\n      <div class=\"time\" [ngStyle]=\"{\n        'transform': 'translateX(' + ( -i + dayEnd-1 ) / ( dayEnd-1 - dayStart-1 ) * 100  + '%)'\n      }\">{{i}}:00</div>\n      <!-- y = ( - x  + dayEnd ) / ( dayEnd - dayStart )\n      это функция для вычисления смещения относительно экрана.\n      лейблы со временем слева по бокам смещаются к центру\n      правда это выглядит не так красиво как ожидалось\n      но я потратил на это немало времени... -->\n    </div>\n\n    <!-- <div class=\"task\" *ngFor=\"let task of tasks, let i = index\" [ngStyle]=\"{\n      'left': ((getTime(task.datetime) / hour - dayStart) / (24 - dayStart - (24 - dayEnd))) * 100 + '%'\n    }\">\n      <div class=\"label\" [ngStyle]=\"{\n        'top': i % levels * 90 / levels + '%'\n      }\">{{task.title}}\n        <div class=\"border-bottom\"></div>\n      </div>\n    </div> -->\n\n    <!-- <div class=\"task\" *ngFor=\"let task of dailyTasks, let i = index\" [ngStyle]=\"{\n      'left': ((getTime(task.time) / hour - dayStart) / (24 - dayStart - (24 - dayEnd))) * 100 + '%'\n    }\" [ngClass]=\"{\n      'daily': true\n    }\">\n      <div class=\"label\" [ngStyle]=\"{\n        'top': i % levels * 90 / levels + '%'\n      }\">{{task.title}}\n        <div class=\"border-bottom\"></div>\n      </div>\n    </div> -->\n\n    <div class=\"task\" *ngFor=\"let task of allTasks, let i = index\" [ngStyle]=\"{\n      'left': task.left + '%'\n    }\" [ngClass]=\"{\n      'daily': task.daily\n    }\">\n      <div class=\"label\" [ngStyle]=\"{\n        'top': task.top + '%'\n      }\">{{task.title}}\n        <div class=\"border-bottom\"></div>\n      </div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/components/today/today.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/today/today.component.ts ***!
  \*****************************************************/
/*! exports provided: TodayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayComponent", function() { return TodayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnyTask = /** @class */ (function () {
    function AnyTask() {
    }
    return AnyTask;
}());
var TodayComponent = /** @class */ (function () {
    function TodayComponent(http, events) {
        this.http = http;
        this.events = events;
        /**
         * через httpService получить все таски на сегодня + ежедневные
         */
        this.tasks = [];
        this.dailyTasks = [];
        this.timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
        this.hour = 1000 * 60 * 60;
        this.arr24 = new Array(24);
        this.dayStart = 5;
        this.dayEnd = 24;
        this.levels = 5;
    }
    Object.defineProperty(TodayComponent.prototype, "allTasks", {
        get: function () {
            var allTasks = [];
            for (var i = 0; i < this.tasks.length; i++) {
                var task = {
                    title: this.tasks[i].title,
                    left: ((this.getTime(this.tasks[i].datetime) / this.hour - this.dayStart) / (24 - this.dayStart - (24 - this.dayEnd))) * 100,
                    daily: false,
                    top: 0
                };
                allTasks.push(task);
            }
            for (var i = 0; i < this.dailyTasks.length; i++) {
                var task = {
                    title: this.dailyTasks[i].title,
                    left: ((this.getTime(this.dailyTasks[i].time) / this.hour - this.dayStart) / (24 - this.dayStart - (24 - this.dayEnd))) * 100,
                    daily: true,
                    top: 0
                };
                allTasks.push(task);
            }
            allTasks.sort(function (a, b) { return a.left - b.left; });
            var lastTop = 0;
            for (var i = 1; i < allTasks.length; i++) {
                if (allTasks[i].left - allTasks[i - 1].left < 100 / 24 * 1.5) {
                    lastTop += 90 / this.levels;
                    allTasks[i].top = lastTop;
                }
                else
                    lastTop = 0;
            }
            return allTasks;
        },
        enumerable: true,
        configurable: true
    });
    TodayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events.refreshTasksEvent.subscribe(function () {
            _this.getTasks();
        });
        this.events.refreshDailyTasksEvent.subscribe(function () {
            _this.getDailyTasks();
        });
        this.getTasks();
        this.getDailyTasks();
    };
    TodayComponent.prototype.getTasks = function () {
        var _this = this;
        var start = new Date();
        start.setHours(0, 0, 0, 0);
        var todayStart = start.getTime();
        var end = new Date();
        end.setHours(23, 59, 59, 999);
        var todayEnd = end.getTime();
        this.http.getTasks().subscribe(function (date) {
            _this.tasks = [];
            var tasks = date.json().tasks;
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                if (new Date(task.datetime).getTime() > todayStart && new Date(task.datetime).getTime() < todayEnd) {
                    _this.tasks.push(task);
                }
            }
            _this.sortTasks();
        });
    };
    TodayComponent.prototype.getDailyTasks = function () {
        var _this = this;
        this.http.getDailyTasks().subscribe(function (date) {
            _this.dailyTasks = date.json().dailyTasks;
            _this.sortAllTasks();
        });
    };
    TodayComponent.prototype.sortTasks = function () {
        this.tasks.sort(function (a, b) {
            return (new Date(a.datetime).getTime() - new Date(b.datetime).getTime());
        });
    };
    TodayComponent.prototype.sortDailyTasks = function () {
        this.dailyTasks.sort(function (a, b) {
            return (a.time - b.time);
        });
    };
    TodayComponent.prototype.getTime = function (time) {
        return ((new Date(time).getTime() - this.timezoneOffset) % (this.hour * 24));
    };
    TodayComponent.prototype.sortAllTasks = function () {
        this.allTasks.sort(function (a, b) {
            return a.time - b.time;
        });
    };
    TodayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-today',
            template: __webpack_require__(/*! ./today.component.html */ "./src/app/components/today/today.component.html"),
            styles: [__webpack_require__(/*! ./today.component.css */ "./src/app/components/today/today.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], TodayComponent);
    return TodayComponent;
}());



/***/ }),

/***/ "./src/app/pipes/time-from-milliseconds.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/pipes/time-from-milliseconds.pipe.ts ***!
  \******************************************************/
/*! exports provided: TimeFromMillisecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFromMillisecondsPipe", function() { return TimeFromMillisecondsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeFromMillisecondsPipe = /** @class */ (function () {
    function TimeFromMillisecondsPipe() {
    }
    TimeFromMillisecondsPipe.prototype.transform = function (milliseconds, args) {
        var h = Math.floor(milliseconds / 1000 / 60);
        var s = Math.floor(milliseconds / 1000) % 60;
        return h + ":" + (s < 10 ? '0' + s : s);
    };
    TimeFromMillisecondsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'TimeFromMillisecondsPipe'
        })
    ], TimeFromMillisecondsPipe);
    return TimeFromMillisecondsPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.saveToken = function (token) {
        window.localStorage.setItem('token', token);
    };
    AuthService.prototype.removeToken = function () {
        window.localStorage.removeItem('token');
    };
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return window.localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            if (this.token) {
                var payload = JSON.parse(window.atob(this.token.split('.')[1]));
                return payload.exp > Date.now() / 1000;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "username", {
        get: function () {
            if (this.isLoggedIn) {
                var payload = JSON.parse(window.atob(this.token.split('.')[1]));
                return payload.username;
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.register = function (user, callback) {
        var _this = this;
        this.http.post('/api/authentication/register', user).subscribe(function (response) {
            callback(response);
            _this.saveToken(response.json().token);
        }, function (response) {
            callback(response);
        });
    };
    AuthService.prototype.logIn = function (user, callback) {
        var _this = this;
        this.http.post('/api/authentication/login', user).subscribe(function (response) {
            callback(response);
            _this.saveToken(response.json().token);
        }, function (response) {
            callback(response);
        });
    };
    AuthService.prototype.logOut = function () {
        this.removeToken();
    };
    AuthService.prototype.ping = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('authorization', this.token);
        return this.http.get('/api/authentication/ping', { headers: headers });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsService = /** @class */ (function () {
    function EventsService() {
        this.refreshTasksEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refreshDailyTasksEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refreshNotes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    Object.defineProperty(HttpService.prototype, "token", {
        get: function () {
            return window.localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpService.prototype, "headers", {
        get: function () {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            headers.append('authorization', this.token);
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    // Tasks
    HttpService.prototype.saveTask = function (task, id) {
        return this.http.put('/api/tasks/save', task, { headers: this.headers, params: { _id: id } });
    };
    HttpService.prototype.getTask = function (id) {
        return this.http.get('/api/tasks/getOneById', { headers: this.headers, params: { _id: id } });
    };
    HttpService.prototype.getTasks = function (start, end) {
        return this.http.get('/api/tasks/getAll', { headers: this.headers, params: {} });
    };
    HttpService.prototype.deleteTasks = function (id) {
        return this.http.delete('/api/tasks/deleteOneById', { headers: this.headers, params: { _id: id } });
    };
    // DailyTasks
    HttpService.prototype.saveDailyTask = function (task, id) {
        return this.http.put('/api/daily-tasks/saveDailyTask', task, { headers: this.headers, params: { _id: id } });
    };
    HttpService.prototype.getDailyTask = function (id) {
        return this.http.get('/api/daily-tasks/getDailyTaskById', { headers: this.headers, params: { _id: id } });
    };
    HttpService.prototype.getDailyTasks = function (start, end) {
        return this.http.get('/api/daily-tasks/getAllDailyTasks', { headers: this.headers, params: {} });
    };
    HttpService.prototype.deleteDailyTasks = function (id) {
        return this.http.delete('/api/daily-tasks/deleteDailyTaskById', { headers: this.headers, params: { _id: id } });
    };
    // Notes
    HttpService.prototype.addNewNote = function () {
        return this.http.get('/api/notes/add', { headers: this.headers });
    };
    HttpService.prototype.getOneNoteById = function (_id) {
        return this.http.get('/api/notes/getOneById', { headers: this.headers, params: { _id: _id } });
    };
    HttpService.prototype.saveNote = function (note) {
        return this.http.put('/api/notes/saveNote', note, { headers: this.headers });
    };
    HttpService.prototype.getNotes = function () {
        return this.http.get('/api/notes/allNotes', { headers: this.headers });
    };
    HttpService.prototype.deleteNote = function (_id) {
        return this.http.delete('/api/notes/deleteNote', { headers: this.headers, params: { _id: _id } });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work-files\life-planer\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map