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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pasien_1 = require("./pasien");
var poliklinik_service_1 = require("../layanan/poliklinik.service");
var PasienFormComponent = (function () {
    function PasienFormComponent(route, poliklinikService) {
        this.route = route;
        this.poliklinikService = poliklinikService;
        this.genders = ['Laki-laki', 'Perempuan'];
        this.religions = ['Islam', 'Protestan', 'Katolik', 'Buddha', 'Hindu', 'Konghucu'];
        this.doctors = ['Dr. Juan', 'Dr. Alec', 'Dr. Hans', 'Dr. Kelvin'];
        this.model = new pasien_1.Pasien('Dr IQ', '2012-09-12', this.genders[0], this.religions[0], 'Chuck Overstreet', '0892983211', 'aa', 'a');
        this.submitted = false;
    }
    PasienFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.poliklinikService.getAllPoliklinik()
            .then(function (allPoliklinik) { return _this.allPoliklinik = allPoliklinik; });
    };
    PasienFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(PasienFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return PasienFormComponent;
}());
PasienFormComponent = __decorate([
    core_1.Component({
        selector: 'pasien-form',
        templateUrl: './pasien-form.component.html',
        providers: [
            poliklinik_service_1.PoliklinikService
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        poliklinik_service_1.PoliklinikService])
], PasienFormComponent);
exports.PasienFormComponent = PasienFormComponent;
//# sourceMappingURL=pasien-form.component.js.map