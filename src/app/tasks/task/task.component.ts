import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private taskService = inject(TaskService);

  onTaskCompleted() {
    this.taskService.removeTask(this.task.id);
  }
}
