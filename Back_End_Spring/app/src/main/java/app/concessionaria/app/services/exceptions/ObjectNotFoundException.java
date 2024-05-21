package app.concessionaria.app.services.exceptions;

public class ObjectNotFoundException extends RuntimeException{
    
    public ObjectNotFoundException(String msg) {
        super(msg);
    }
}
