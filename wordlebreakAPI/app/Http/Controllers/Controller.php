<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Lettre;
use App\Models\Word;


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function testGetRoute(){
        return [
            'message' => 'yousk2'

        ];
    }
    public function index(){
        $countWords = count(Word::all());
        $response = [
               'countWords' => $countWords,
               'word' =>  Word::find(12474)
        ];
        return json_encode($response);
    }

    public function tableWord(){
        return Word::all();
    }

}
