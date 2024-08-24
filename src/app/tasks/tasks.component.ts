import { Component, inject, Input } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  private taskService = inject(TaskService);
  // constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getTasks(this.userId);
  }

  addNewTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
