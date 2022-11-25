

import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';

import { Result } from 'src/shared/result.model';
import { CompraDto } from '../dto/compra.dto';
import { Compra } from '../model/compra.model';

import { CompraService } from '../services/compra.service';


@Controller({ path: 'compra'})
@Controller()
export class CompraController {

    constructor(private clienteService:CompraService) {}
  
   
 
  
   // @UseGuards(JwtAuthGuard)
     @Get()
    async findAll(): Promise<any> {
      return await this.clienteService.getAll();
    }



    @Get('estado/:estado')
    async findAtivos(@Param('estado') estado: number):  Promise<Compra> {
  console.log("estado", estado)
  
      return await this.clienteService.getByEstado(estado)
    }



 
  
    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: string):  Promise<Compra> {
      return await this.clienteService.getById(id)
    }
  

 
    //@UseGuards(JwtAuthGuard)
    @Get('localizar/:cpf')
    async findOneCpf(@Param('cpf') cpf: string):  Promise<Compra> {
      return await this.clienteService.getByCpf(cpf)
    }
  








    


  
  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() clienteDto:CompraDto){

    try{
        
      const produto = new Compra(clienteDto.nome,clienteDto.cpf,clienteDto.cnpj,
        clienteDto.email,clienteDto.bairro,clienteDto.cep,
        clienteDto.preco,clienteDto.logradouro,clienteDto.numero,
        clienteDto.pontoReferencia,clienteDto.telefone, clienteDto.dataInicio, clienteDto.dataFim,   clienteDto.estado,

        
        
        );

      console.log("produtoxxxxxxxxxxxxxxxxxx4444")   


      const res= await this.clienteService.create(produto)
       console.log("produto")   
      return     new Result('Compra criado com sucesso!', true, res , null);
      }
     catch (error){
      //ROOLABACK MANUAL
      throw new HttpException(new Result('Nao foi possivel realizar seu cadastro', false,null,error), HttpStatus.BAD_REQUEST);
   }

}
 
       
  
  
   // @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Body() compra, @Param('id') id:string): Promise<Compra> {
      return await this.clienteService.update(id,compra)
    }




    
  
   // @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id:string): Promise<[]> {
      await this.clienteService.delete(id);
      return []
    }
  
  
  
  
  
  
  
  
  }
  