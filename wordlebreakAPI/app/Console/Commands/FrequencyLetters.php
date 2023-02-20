<?php

namespace App\Console\Commands;
use Illuminate\Console\Command;
use App\Models\Word;
use App\Models\Letter;



class FrequencyLetters extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'letters:frequency';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $words = Word::all();
        $letter = Letter::all();
        $countLetters = 0;

      
      
       
 
        foreach ($words as $word) {
           $countLetters = $countLetters+strlen($word->word_clean);
         
        }
      
        
        foreach($letter as $valueletter){
            $countletter =0;
            foreach ($words as $word){

                for ($i =0; $i<strlen($word->word_clean);$i++ ){
                    if($word->word_clean[$i] == $valueletter->letter){
                        $countletter++;
                        // $this->info($countletter);
                        
                    }
                }
            }
 
            $this->info($countletter/$countLetters);
            $valueletter->occurence = $countletter/$countLetters;
            $valueletter->save();

             
        }
          // foreach ($word as $word) {
        //     $meilleurMots = 0;
        //     $ScoreLettreParMots=0;

        //     for($i=0; $i<strlen($word->word_clean);$i++){
        //         foreach ($lettre as $lettres){
        //             if($lettre == $word->word_clean[$i]){
        //                 $ScoreLettreParMots+=$lettre->occurence;
        //                 $this->info($ScoreLettreParMots);
        //             }
                    
        //         }
        //     }
            
        // }
        

        return Command::SUCCESS;
    }
}
