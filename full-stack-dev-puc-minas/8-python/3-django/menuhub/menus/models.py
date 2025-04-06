from django.db import models

# Um objeto da classe Restaurant armazena informações
class Restaurant(models.Model):
    
    name = models.CharField(max_length=45)
    
    def __str__(self):
        return f"[Restaurant] name: {self.name}"

# Um objeto da classe MenuItem armazena informações sobre item de um menu de um restaurante.
class MenuItem(models.Model):
    
    category = models.CharField(max_length=45)
    description = models.CharField(max_length=250)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
 
    # Retorna uma representação em string do Objeto
    def __str__(self):
        return f"[MenuItem] description: {self.description[:50]}"