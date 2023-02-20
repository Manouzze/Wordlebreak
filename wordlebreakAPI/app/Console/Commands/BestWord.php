<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Word;
use App\Models\Letter;


class BestWord extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:bestWord';

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
        $wordsList = Word::all();;
        $letterList = Letter::all();

        $meilleurMot = "";
        $scoreMeilleurMot=0;
        
        foreach ($wordsList as $word) {
            $scoreLettreParMot=0;
            for($i=0; $i<strlen($word->word_clean);$i++){

                foreach ($letterList as $letter){
                    if($letter->letter == $word->word_clean[$i]){
                        $scoreLettreParMot+=$letter->occurence;

                    }
                    
                }

            }
        if($scoreLettreParMot>$scoreMeilleurMot){
            $scoreMeilleurMot = $scoreLettreParMot;
            $meilleurMot = $word->word;
        }
    };
    $this->info($meilleurMot);

    // $bestLetters = Letter::orderBy('occurence','desc')->take(5)->get();
    // $bestLettersArray = array('');
    // foreach($bestLetters as $bestLetter){
    //     array_push($bestLettersArray, $bestLetter->letter);
    // };
    // $this->info(implode(' ',$bestLettersArray));
    

    return Command::SUCCESS;
    }
}


