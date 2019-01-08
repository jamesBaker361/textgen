import sys
import json
from queryRouter import queryRouter

def main():
	query=sys.stdin.readline()
	quant=sys.stdin.readline()
	options=sys.stdin.readline()
	qr=queryRouter(query)
	if qr['valid'] is True:
		print(query+quant+options)
	else:
		print("Invalid Query!")

if __name__ == '__main__':
	main()