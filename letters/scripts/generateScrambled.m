objectsDir = 1;
currentDir = pwd;
cd ../lowerletters

whiteRange = 0;
objectStem = 'object'
scalar = 15;
numImages = 26;

for cImage = 1:numImages
   omni(:,:,cImage) = imread(strcat(objectStem,int2str(cImage),'.jpg'));
end

whiteSpace = zeros(size(omni,1)/scalar,size(omni,2)/scalar,size(omni,3));

for imageIndex = 1:size(omni,3)
    for i = 1:size(omni,1)/scalar
        for j = 1:size(omni,2)/scalar
            iRange = (i*scalar - (scalar-1)):i*scalar;
            jRange = (j*scalar - (scalar-1)):j*scalar;
            
            temp = squeeze(omni(iRange,jRange,imageIndex));
            
            if mean(mean(temp)) < 255 - whiteRange
               whiteSpace(i,j,imageIndex) = 1;                  
            end
        end
    end   
end




usedIndex = ones(size(omni,1)/scalar,size(omni,2)/scalar,size(omni,3));

for imageIndex = 1:size(omni,3)
    seedImage = whiteSpace(:,:,imageIndex);
    for i = 1:300/scalar
        for j = 1:300/scalar
            iRange = (i*scalar - (scalar-1)):i*scalar;
            jRange = (j*scalar - (scalar-1)):j*scalar;
            unsatisfied = 1;
            count = 0;
        
            while unsatisfied
                seed = randperm(size(omni,3));
                select = seed(1);
                count = count+1;

                if usedIndex(i,j,select) 
                    usedIndex(i,j,select) = 0; 
                    final(iRange,jRange,imageIndex) = omni(iRange,jRange,select);  
                    unsatisfied = 0;
                end
            end
        end
    end   
end

sum(sum(sum(usedIndex)))

 % for imageIndex = 1:size(omni,3)
 %    figure;
 %    image(final(:,:,imageIndex)); hold on;
 %    colormap gray
 % end


for imageIndex = 1:size(omni,3)
    imwrite(final(:,:,imageIndex),strcat('scrambled50',int2str(imageIndex),'.jpg'),'JPEG');
end

cd(currentDir)

