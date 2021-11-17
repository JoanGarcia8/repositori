import java.util.Scanner;
 
class Ex1 {
    public static void main(String[]args){
    Scanner kb = new Scanner (System.in);
    System.out.println("Posa un numero");
    int numero = kb.nextInt();
    while (numero!=0){
            System.out.println("Els seu doble es: " +(numero*2));
            System.out.println("Posa un numero");
            numero = kb.nextInt();
    }
    System.out.println('Hola, soc en Joan Roura Lema')
}
}

