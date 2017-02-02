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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var CountingService = (function () {
    function CountingService() {
        this.count = 0; // initial count value
        this.subject = new BehaviorSubject_1.BehaviorSubject(this.count);
    }
    // A subject is a special type of observable that is also an observer, so you can send values in addition to subscribing to it.
    // Behavior subject needs a initial value as it must always return a value on subscription even if it hasn't received a next().
    CountingService.prototype.increase = function () {
        this.subject.next(++this.count);
    };
    CountingService.prototype.decrease = function () {
        this.subject.next(--this.count);
    };
    CountingService.prototype.getCount = function () {
        return this.subject.asObservable();
    };
    CountingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CountingService);
    return CountingService;
}());
exports.CountingService = CountingService;
//# sourceMappingURL=counting.service.js.map