"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var counting_service_1 = require('./counting.service');
var ComponentB = (function () {
    function ComponentB(countingService) {
        this.countingService = countingService;
        this.clicked = new core_1.EventEmitter();
        this.title = "Component B";
    }
    ComponentB.prototype.increaseCount = function () {
        this.countingService.increase();
        this.emitTitle();
    };
    ComponentB.prototype.decreaseCount = function () {
        this.countingService.decrease();
        this.emitTitle();
    };
    ComponentB.prototype.emitTitle = function () {
        this.clicked.emit(this.title);
    };
    ComponentB.prototype.ngOnInit = function () {
        var _this = this;
        var count$ = this.countingService.getCount();
        this.countSubscription = count$.subscribe(function (count) {
            _this.count = count;
        });
    };
    ComponentB.prototype.ngOnDestroy = function () {
        this.countSubscription.unsubscribe();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ComponentB.prototype, "clicked", void 0);
    ComponentB = __decorate([
        core_1.Component({
            selector: 'component-b',
            template: "<h2>{{title}}</h2>\n             <p>Shared count: {{count}}</p>\n             <button (click)=\"decreaseCount()\">-</button><button (click)=\"increaseCount()\">+</button>",
        }), 
        __metadata('design:paramtypes', [counting_service_1.CountingService])
    ], ComponentB);
    return ComponentB;
}());
exports.ComponentB = ComponentB;
//# sourceMappingURL=componentB.component.js.map