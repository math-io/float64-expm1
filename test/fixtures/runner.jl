using JSON

x = linspace( 1e-400, 1e-1, 10000 )

y = expm1( x )
println( y )

data = Dict([
	("data", x),
	("expected", y)
])

outfile = open( "./test/fixtures/small.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
