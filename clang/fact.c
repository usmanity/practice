#include <stdio.h>

int fact(int n) {
  if (n == 1)
    return 1;
  else
    return n * fact(n - 1);
}

int main(void) {
  printf("Factorial for 5 \n");
  printf("%d\n", fact(5));
}
