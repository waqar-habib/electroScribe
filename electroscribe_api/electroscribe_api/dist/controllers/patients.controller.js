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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let patientsController = class patientsController {
    constructor(patientsRepository) {
        this.patientsRepository = patientsRepository;
    }
    async create(patients) {
        return this.patientsRepository.create(patients);
    }
    async count(where) {
        return this.patientsRepository.count(where);
    }
    async find(filter) {
        return this.patientsRepository.find(filter);
    }
    async updateAll(patients, where) {
        return this.patientsRepository.updateAll(patients, where);
    }
    async findById(id) {
        return this.patientsRepository.findById(id);
    }
    async updateById(id, patients) {
        await this.patientsRepository.updateById(id, patients);
    }
    async replaceById(id, patients) {
        await this.patientsRepository.replaceById(id, patients);
    }
    async deleteById(id) {
        await this.patientsRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/patients', {
        responses: {
            '200': {
                description: 'patients model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.patients) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.patients, { exclude: ['pt_uuid'] }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], patientsController.prototype, "create", null);
__decorate([
    rest_1.get('/patients/count', {
        responses: {
            '200': {
                description: 'patients model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.patients))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], patientsController.prototype, "count", null);
__decorate([
    rest_1.get('/patients', {
        responses: {
            '200': {
                description: 'Array of patients model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.patients) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.patients))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], patientsController.prototype, "find", null);
__decorate([
    rest_1.patch('/patients', {
        responses: {
            '200': {
                description: 'patients PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.patients, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.patients))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.patients, Object]),
    __metadata("design:returntype", Promise)
], patientsController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/patients/{id}', {
        responses: {
            '200': {
                description: 'patients model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.patients) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], patientsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/patients/{id}', {
        responses: {
            '204': {
                description: 'patients PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.patients, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.patients]),
    __metadata("design:returntype", Promise)
], patientsController.prototype, "updateById", null);
__decorate([
    rest_1.put('/patients/{id}', {
        responses: {
            '204': {
                description: 'patients PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.patients]),
    __metadata("design:returntype", Promise)
], patientsController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/patients/{id}', {
        responses: {
            '204': {
                description: 'patients DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], patientsController.prototype, "deleteById", null);
patientsController = __decorate([
    __param(0, repository_1.repository(repositories_1.patientsRepository)),
    __metadata("design:paramtypes", [repositories_1.patientsRepository])
], patientsController);
exports.patientsController = patientsController;
//# sourceMappingURL=patients.controller.js.map