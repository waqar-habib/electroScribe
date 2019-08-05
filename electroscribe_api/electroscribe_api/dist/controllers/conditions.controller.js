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
let conditionsController = class conditionsController {
    constructor(conditionsRepository) {
        this.conditionsRepository = conditionsRepository;
    }
    async create(conditions) {
        return this.conditionsRepository.create(conditions);
    }
    async count(where) {
        return this.conditionsRepository.count(where);
    }
    async find(filter) {
        return this.conditionsRepository.find(filter);
    }
    async updateAll(conditions, where) {
        return this.conditionsRepository.updateAll(conditions, where);
    }
    async findById(id) {
        return this.conditionsRepository.findById(id);
    }
    async updateById(id, conditions) {
        await this.conditionsRepository.updateById(id, conditions);
    }
    async replaceById(id, conditions) {
        await this.conditionsRepository.replaceById(id, conditions);
    }
    async deleteById(id) {
        await this.conditionsRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/conditions', {
        responses: {
            '200': {
                description: 'conditions model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.conditions) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.conditions, { exclude: ['icd_10'] }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], conditionsController.prototype, "create", null);
__decorate([
    rest_1.get('/conditions/count', {
        responses: {
            '200': {
                description: 'conditions model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.conditions))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], conditionsController.prototype, "count", null);
__decorate([
    rest_1.get('/conditions', {
        responses: {
            '200': {
                description: 'Array of conditions model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.conditions) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.conditions))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], conditionsController.prototype, "find", null);
__decorate([
    rest_1.patch('/conditions', {
        responses: {
            '200': {
                description: 'conditions PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.conditions, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.conditions))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.conditions, Object]),
    __metadata("design:returntype", Promise)
], conditionsController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/conditions/{id}', {
        responses: {
            '200': {
                description: 'conditions model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.conditions) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], conditionsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/conditions/{id}', {
        responses: {
            '204': {
                description: 'conditions PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.conditions, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.conditions]),
    __metadata("design:returntype", Promise)
], conditionsController.prototype, "updateById", null);
__decorate([
    rest_1.put('/conditions/{id}', {
        responses: {
            '204': {
                description: 'conditions PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.conditions]),
    __metadata("design:returntype", Promise)
], conditionsController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/conditions/{id}', {
        responses: {
            '204': {
                description: 'conditions DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], conditionsController.prototype, "deleteById", null);
conditionsController = __decorate([
    __param(0, repository_1.repository(repositories_1.conditionsRepository)),
    __metadata("design:paramtypes", [repositories_1.conditionsRepository])
], conditionsController);
exports.conditionsController = conditionsController;
//# sourceMappingURL=conditions.controller.js.map