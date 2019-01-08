import sys
import os.path

def queryRouter(query,options={}):
	out={'valid':True,'content':''}
	out['valid']=(os.path.isfile('saved/'+query+'.txt'))
	if out['valid'] is True:
		out['content']=open('saved/'+query+'.txt','r').read() #open('saved/marx.txt','r').read()
	return(out)