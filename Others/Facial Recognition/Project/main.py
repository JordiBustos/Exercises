import cv2 as cv
import os 

#Data-base
modelo='FotosModel'
ruta1='/Data'
rutacompleta = ruta1+'/'+modelo
#Check if the rout exist, if not create it
if not os.path.exists(rutacompleta):
    os.makedirs(rutacompleta)

#-------------------------------------------------------------
ruidos=cv.CascadeClassifier('haarcascade_frontalface_default.xml')
camara=cv.VideoCapture('model.mp4')
id=0
#Activate camera
while True:
    respuesta, captura=camara.read()
    if respuesta==False:break
    grises=cv.cvtColor(captura, cv.COLOR_BGR2GRAY)
    idcaptura=captura.copy()

    cara=ruidos.detectMultiScale(grises, 1.5, 3) #this can change

    for (x, y, corner, corner2) in cara:
        cv.rectangle(captura, (x, y), (x+corner, y+corner2), (255, 0, 0),3)
        rostrocapturado=idcaptura[y:y+corner2, x:x+corner]
        rostrocapturado=cv.resize(rostrocapturado,
                (160,160),interpolation=cv.INTER_CUBIC)
        cv.imwrite(rutacompleta+'/imagen_{}.jpg'.format(id),rostrocapturado)
        id+=1

    cv.imshow('Result', captura)
    
    if id==351:
        break
camara.release()
cv.destroyAllWindows()
#--------------------------------------------------------------
