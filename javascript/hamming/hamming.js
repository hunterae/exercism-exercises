module.exports = function(firstStrand, secondStrand) {
  var differences = 0;

  if (!firstStrand || !secondStrand)
    throw 'Both DNA strands must be passed in';

  else if (firstStrand.length != secondStrand.length)
    throw 'DNA strands must be of equal length.';

  else if (firstStrand != secondStrand)
    for (var i = 0; i < firstStrand.length; i++) {
      if (firstStrand[i] != secondStrand[i])
        differences++;
    }

  return differences;
}
