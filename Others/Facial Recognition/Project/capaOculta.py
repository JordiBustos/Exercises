import cv2 as cv
import os
import numpy as np

dataRuta='/Data'

listaData=os.listdir(dataRuta)

ids=[]
rostrosData=[]
id=0
for fila in listaData:
    rutacompleta=dataRuta+'/' + fila
    print('Iniciando lectura...')
    for archivo in os.listdir(rutacompleta):
        print('Imagenes: ', fila +'/'+archivo)
        ids.append(id)
        rostrosData.append(cv.imread(rutacompleta+'/'+archivo, 0))
        imagenes=cv.imread(rutacompleta+'/'+archivo,0)
    id+=1

#EIGEN FACE
entrenamientoModelo=cv.face.EigenFaceRecognizer_create()
print('Iniciando entrenamiento...espere')
entrenamientoModelo.train(rostrosData, np.array(ids))

entrenamientoModelo.write('EntrenamientoEigenFaceRecognizer.xml')
print('Entrenamiento concluido :)')
