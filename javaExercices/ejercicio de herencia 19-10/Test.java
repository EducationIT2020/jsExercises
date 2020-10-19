package educationitclase3;

/*Sistema de gestion de alumnos y profesores
Nombre
Apellido
Id
Edad
del profesor tendremos la materia que da
de los alumnos la materia que cursa y la nota
los ubicaremos por aula donde cada aula tendra un profesor y varios alumnos
queremos ingresar un profesor, alumnos y cerrar el aula para crear otra

 * 
 */
public class Test {

	public static void main(String[] args) {
		Profesor profe1 = new Profesor("pepe","sanches",23,50,"java poo");
		Alumno alumno1 = new Alumno("juan","santarenz",24,25,"java poo",5);
		Alumno alumno2 = new Alumno("gabriel","roque",29,24,"java poo", 4);
		
		Alumno [] listaAlumnos = new Alumno [2];
		
		listaAlumnos[0] = alumno1;
		listaAlumnos[1] = alumno2;
		
		Aula aula1 = new Aula (profe1, listaAlumnos);
		
		System.out.println(aula1);

	}


}
