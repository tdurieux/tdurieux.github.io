import numpy

def isNaN(num):
    return num != num

def med(lst):
    return numpy.median(numpy.array(lst))

def avg(lst):
	if len(lst) == 0 or lst is None:
		return None
	return sum(filter(lambda x: x is not None, lst))/float(len(lst))

def locationID(location):
	output = location['class']
	output += ":%d" % location['line']
	output += "(%d" % location['sourceEnd']
	output += "%d" % location['sourceStart']
	return output

def printInstance(value):
	output = ""
	if 'instanceType' not in value:
		if 'variableName' in value :
			output += value['variableName']
		output += value['type'] + " "
		output +=  value['value']
		return output

	if value['instanceType'] == 'Variable':
		output += value['variableName']
	elif value['instanceType'] == 'StaticVariable':
		output += value['class'] + "."
		output += value['fieldName']
	elif value['instanceType'] == 'Primitive':
		output += str(value['value'])
	elif value['instanceType'] == 'New':
		output += "new " + value['class'] + "("
		if 'parameters' in value:
			for parameter in value['parameters']:
				output += printInstance(parameter)
				output += ","
		output += ")"
	elif value['instanceType'] == 'Array':
		output += "new " + value['class'] + "["
		if 'values' in value:
			for parameter in value['values']:
				output += printInstance(parameter)
				output += ","
		output += "]"
	return output

def decisionID(decision):
	output = decision['strategy'];
	value = decision['value']
	output += printInstance(value)
	output += "at " + locationID(decision['location'])
	return output

def numToStr(num, size=6):
	if num is None or isNaN(num):
		form = "{:^"+str(size)+"}"
		return form.format("---")
	if num == int(num):
		form = "{:"+str(size)+"d}"
		return form.format(int(num))
	form = "{:"+str(size)+".2f}"
	return form.format(num)