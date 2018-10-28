import { TestBed, inject } from '@angular/core/testing';

import { TodoDataServiceService } from './todo-data-service.service';

describe('TodoDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataServiceService]
    });
  });

  it('should be created', inject([TodoDataServiceService], (service: TodoDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
