from textgenrnn import textgenrnn

textgen = textgenrnn()
def generate(content,options={}):
	textgen.reset()
	textgen.train_on_texts(content)
	return(textgen.generate(5))
