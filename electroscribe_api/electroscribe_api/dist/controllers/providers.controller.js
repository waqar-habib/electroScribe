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
let providersController = class providersController {
    constructor(providersRepository) {
        this.providersRepository = providersRepository;
    }
    async create(providers) {
        return this.providersRepository.create(providers);
    }
    async count(where) {
        return this.providersRepository.count(where);
    }
    async find(filter) {
        return this.providersRepository.find(filter);
    }
    async updateAll(providers, where) {
        return this.providersRepository.updateAll(providers, where);
    }
    async findById(id) {
        return this.providersRepository.findById(id);
    }
    async updateById(id, providers) {
        await this.providersRepository.updateById(id, providers);
    }
    async replaceById(id, providers) {
        await this.providersRepository.replaceById(id, providers);
    }
    async deleteById(id) {
        await this.providersRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/providers', {
        responses: {
            '200': {
                description: 'providers model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.providers) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.providers, { exclude: ['provider_uuid'] }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], providersController.prototype, "create", null);
__decorate([
    rest_1.get('/providers/count', {
        responses: {
            '200': {
                description: 'providers model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.providers))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], providersController.prototype, "count", null);
__decorate([
    rest_1.get('/providers', {
        responses: {
            '200': {
                description: 'Array of providers model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.providers) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.providers))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], providersController.prototype, "find", null);
__decorate([
    rest_1.patch('/providers', {
        responses: {
            '200': {
                description: 'providers PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.providers, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.providers))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.providers, Object]),
    __metadata("design:returntype", Promise)
], providersController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/providers/{id}', {
        responses: {
            '200': {
                description: 'providers model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.providers) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], providersController.prototype, "findById", null);
__decorate([
    rest_1.patch('/providers/{id}', {
        responses: {
            '204': {
                description: 'providers PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.providers, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.providers]),
    __metadata("design:returntype", Promise)
], providersController.prototype, "updateById", null);
__decorate([
    rest_1.put('/providers/{id}', {
        responses: {
            '204': {
                description: 'providers PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.providers]),
    __metadata("design:returntype", Promise)
], providersController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/providers/{id}', {
        responses: {
            '204': {
                description: 'providers DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], providersController.prototype, "deleteById", null);
providersController = __decorate([
    __param(0, repository_1.repository(repositories_1.providersRepository)),
    __metadata("design:paramtypes", [repositories_1.providersRepository])
], providersController);
exports.providersController = providersController;
//# sourceMappingURL=providers.controller.js.map