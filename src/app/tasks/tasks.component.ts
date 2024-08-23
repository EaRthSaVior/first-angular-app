import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NgIf],
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
