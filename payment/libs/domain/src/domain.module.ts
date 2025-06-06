import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';

/**
 * Módulo Domain que provee y exporta el servicio DomainService.
 * Este módulo puede ser importado en otros módulos para reutilizar la lógica de dominio.
 */
@Module({
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}
