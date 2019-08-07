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
let drugsController = class drugsController {
    constructor(drugsRepository) {
        this.drugsRepository = drugsRepository;
    }
    async create(drugs) {
        return this.drugsRepository.create(drugs);
    }
    async count(where) {
        return this.drugsRepository.count(where);
    }
    async find(filter) {
        return this.drugsRepository.find(filter);
    }
    async updateAll(drugs, where) {
        return this.drugsRepository.updateAll(drugs, where);
    }
    async findById(id) {
        return this.drugsRepository.findById(id);
    }
    async updateById(id, drugs) {
        await this.drugsRepository.updateById(id, drugs);
    }
    async replaceById(id, drugs) {
        await this.drugsRepository.replaceById(id, drugs);
    }
    async deleteById(id) {
        await this.drugsRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/drugs', {
        responses: {
            '200': {
                description: 'drugs model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.drugs) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.drugs, { exclude: ['drug_uuid'] }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], drugsController.prototype, "create", null);
__decorate([
    rest_1.get('/drugs/count', {
        responses: {
            '200': {
                description: 'drugs model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.drugs))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], drugsController.prototype, "count", null);
__decorate([
    rest_1.get('/drugs', {
        responses: {
            '200': {
                description: 'Array of drugs model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.drugs) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.drugs))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], drugsController.prototype, "find", null);
__decorate([
    rest_1.patch('/drugs', {
        responses: {
            '200': {
                description: 'drugs PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.drugs, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.drugs))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.drugs, Object]),
    __metadata("design:returntype", Promise)
], drugsController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/drugs/{id}', {
        responses: {
            '200': {
                description: 'drugs model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.drugs) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], drugsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/drugs/{id}', {
        responses: {
            '204': {
                description: 'drugs PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.drugs, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.drugs]),
    __metadata("design:returntype", Promise)
], drugsController.prototype, "updateById", null);
__decorate([
    rest_1.put('/drugs/{id}', {
        responses: {
            '204': {
                description: 'drugs PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.drugs]),
    __metadata("design:returntype", Promise)
], drugsController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/drugs/{id}', {
        responses: {
            '204': {
                description: 'drugs DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], drugsController.prototype, "deleteById", null);
drugsController = __decorate([
    __param(0, repository_1.repository(repositories_1.drugsRepository)),
    __metadata("design:paramtypes", [repositories_1.drugsRepository])
], drugsController);
exports.drugsController = drugsController;
//# sourceMappingURL=drugs.controller.js.map