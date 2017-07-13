#include <stdio.h>
#include <unistd.h>

int main(void) {
  pid_t my_pid = getpid();
  pid_t child_pid;

  printf("\n parent pid %u\n", my_pid);

  printf("\n from up here...\n");


  child_pid = fork();
  printf("\n helllllooooo\n");
  printf("\n child pid %u\n", child_pid);

  return 0;
}
