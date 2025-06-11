import os
import argparse

def change_image_extensions(directory):
    # Vérifier si le répertoire existe
    if not os.path.isdir(directory):
        print(f"Erreur : Le répertoire '{directory}' n'existe pas.")
        return

    # Compteur pour le nombre de fichiers modifiés
    count = 0

    # Parcourir tous les fichiers du répertoire
    for filename in os.listdir(directory):
        # Vérifier si le fichier a l'extension .JPG (insensible à la casse)
        if filename.lower().endswith('.jpg'):
            # Construire les chemins complets
            old_file = os.path.join(directory, filename)
            # Créer le nouveau nom en remplaçant l'extension
            new_filename = os.path.splitext(filename)[0] + '.jpeg'
            new_file = os.path.join(directory, new_filename)

            try:
                # Renommer le fichier
                os.rename(old_file, new_file)
                print(f"Renommé : {filename} -> {new_filename}")
                count += 1
            except Exception as e:
                print(f"Erreur lors du renommage de {filename} : {e}")

    # Afficher le résultat final
    if count == 0:
        print("Aucun fichier .JPG trouvé dans le répertoire.")
    else:
        print(f"\nOpération terminée : {count} fichier(s) renommé(s).")

if __name__ == "__main__":
    # Configurer l'analyseur d'arguments
    parser = argparse.ArgumentParser(description="Change l'extension des fichiers .JPG en .jpeg")
    parser.add_argument("directory", help="Chemin du répertoire contenant les images")
    
    # Récupérer les arguments
    args = parser.parse_args()
    
    # Appeler la fonction avec le répertoire spécifié
    change_image_extensions(args.directory)