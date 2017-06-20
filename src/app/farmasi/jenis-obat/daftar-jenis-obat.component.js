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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jenis_obat_service_1 = require("./jenis-obat.service");
var DaftarJenisObatComponent = (function () {
    function DaftarJenisObatComponent(JenisObatService) {
        this.JenisObatService = JenisObatService;
        this.filterQuery = "";
        this.rowsOnPage = 5;
        this.sortBy = "id";
        this.sortOrder = "asc";
    }
    DaftarJenisObatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.JenisObatService.getAllJenisObat()
            .then(function (allJenisObat) { return _this.allJenisObat = allJenisObat; });
    };
    DaftarJenisObatComponent.prototype.onClickDatePicker = function () {
    };
    return DaftarJenisObatComponent;
}());
DaftarJenisObatComponent = __decorate([
    core_1.Component({
        selector: 'daftar-jenis-obat-page',
        templateUrl: './daftar-jenis-obat.component.html',
        providers: [jenis_obat_service_1.JenisObatService]
    }),
    __metadata("design:paramtypes", [jenis_obat_service_1.JenisObatService])
], DaftarJenisObatComponent);
exports.DaftarJenisObatComponent = DaftarJenisObatComponent;
//# sourceMappingURL=daftar-jenis-obat.component.js.map